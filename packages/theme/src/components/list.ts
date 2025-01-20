import { listAnatomy as parts } from "@chakra-v2/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-v2/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleIcon = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom",
})

const baseStyle = definePartsStyle({
  icon: baseStyleIcon,
})

export const listTheme = defineMultiStyleConfig({
  baseStyle,
})
