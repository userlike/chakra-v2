import { SystemStyleObject } from "@chakra-v2/styled-system"
import { createContext } from "@chakra-v2/utils"
import { UseEditableReturn } from "./use-editable"

export const [EditableStylesProvider, useEditableStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `,
})

export type EditableContext = Omit<UseEditableReturn, "htmlProps">

export const [EditableProvider, useEditableContext] =
  createContext<EditableContext>({
    name: "EditableContext",
    errorMessage:
      "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`",
  })
