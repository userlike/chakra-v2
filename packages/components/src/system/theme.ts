import { theme as __theme } from "@chakra-v2/theme"
import { toCSSVar } from "@chakra-v2/styled-system"

export function createTheme(theme: any) {
  return toCSSVar({
    ...theme,
    breakpoints: __theme.breakpoints,
  })
}
