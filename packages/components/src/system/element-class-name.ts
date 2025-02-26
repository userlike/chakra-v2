import { createContext } from "@chakra-v2/utils"

/**
 * @example
 *
 * ```jsx
 * import { createStylesContext } from "@chakra-v2/react"
 *
 * const [StylesProvider, useStyles] = createStylesContext("Component")
 * ```
 */
export const [ElementClassNameProvider, useElementClassName] =
  createContext<string>({
    name: "ElementClassNameContext",
    errorMessage:
      "useElementClassName: `elementClassName` is undefined. Seems you forgot to wrap the components in `<ElementClassNameProvider />` ",
  })
