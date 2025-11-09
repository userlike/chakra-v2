import { analyzeBreakpoints } from "@chakra-v2/utils"
import type { WithCSSVar } from "../utils"
import { createThemeVars } from "./create-theme-vars"
import { omitVars } from "./theme-tokens"

export function toCSSVar<T extends Record<string, any>>(rawTheme: T) {
  /**
   * In the case the theme has already been converted to css-var (e.g. extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  const theme = omitVars(rawTheme)

  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars,
  } = createThemeVars(theme)

  const cssVarPrefix = rawTheme.config.cssVarPrefix

  const defaultCssVars: Record<string, any> = {
    [`--${cssVarPrefix}-ring-inset`]: `var(--${cssVarPrefix}-empty,/*!*/ /*!*/)`,
    [`--${cssVarPrefix}-ring-offset-width`]: "0px",
    [`--${cssVarPrefix}-ring-offset-color`]: "#fff",
    [`--${cssVarPrefix}-ring-color`]: "rgba(66, 153, 225, 0.6)",
    [`--${cssVarPrefix}-ring-offset-shadow`]: "0 0 #0000",
    [`--${cssVarPrefix}-ring-shadow`]: "0 0 #0000",
    [`--${cssVarPrefix}-space-x-reverse`]: "0",
    [`--${cssVarPrefix}-space-y-reverse`]: "0",
  }

  Object.assign(theme, {
    __cssVars: { ...defaultCssVars, ...cssVars },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme.breakpoints),
  })

  return theme as WithCSSVar<T>
}
