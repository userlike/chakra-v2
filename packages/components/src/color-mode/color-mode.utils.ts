import { ColorMode } from "./color-mode-types"

const classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark",
}

type UtilOptions = {
  preventTransition?: boolean
  nonce?: string
  getDocument: () => Document
}

export function getColorModeUtils(
  options: UtilOptions = { getDocument: () => document },
) {
  const { preventTransition = true, nonce } = options

  const utils = {
    setDataset: (value: ColorMode) => {
      const doc = options.getDocument()
      const cleanup = preventTransition ? utils.preventTransition() : undefined
      doc.documentElement.dataset.theme = value
      doc.documentElement.style.colorScheme = value
      cleanup?.()
    },
    setClassName(dark: boolean) {
      const doc = options.getDocument()
      doc.body.classList.add(dark ? classNames.dark : classNames.light)
      doc.body.classList.remove(dark ? classNames.light : classNames.dark)
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)")
    },
    getSystemTheme(fallback?: ColorMode) {
      const dark = utils.query().matches ?? fallback === "dark"
      return dark ? "dark" : "light"
    },
    addListener(fn: (cm: ColorMode) => unknown) {
      const mql = utils.query()
      const listener = (e: MediaQueryListEvent) => {
        fn(e.matches ? "dark" : "light")
      }

      if (typeof mql.addListener === "function") mql.addListener(listener)
      else mql.addEventListener("change", listener)

      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener)
        else mql.removeEventListener("change", listener)
      }
    },
    preventTransition() {
      const doc = options.getDocument()
      const css = doc.createElement("style")
      css.appendChild(
        doc.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
        ),
      )

      if (nonce !== undefined) {
        css.nonce = nonce
      }

      doc.head.appendChild(css)

      return () => {
        // force a reflow
        ;(() => window.getComputedStyle(doc.body))()

        // wait for next tick
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            doc.head.removeChild(css)
          })
        })
      }
    },
  }

  return utils
}
