import { createContext } from "@chakra-v2/utils/context"
import { CheckboxGroupContext } from "./checkbox-types"

export const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createContext<CheckboxGroupContext>({
    name: "CheckboxGroupContext",
    strict: false,
  })
