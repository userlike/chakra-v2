import { extendTheme, type ThemeConfig } from "@chakra-v2/react"

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default theme
