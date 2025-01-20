import { ThemingProps } from "@chakra-v2/styled-system"
import { createContext } from "@chakra-v2/utils"

export interface ButtonGroupContext extends ThemingProps<"Button"> {
  /**
   * @default false
   */
  isDisabled?: boolean
}

export const [ButtonGroupProvider, useButtonGroup] =
  createContext<ButtonGroupContext>({
    strict: false,
    name: "ButtonGroupContext",
  })
