import { SystemStyleObject } from "@chakra-v2/styled-system"
import { createContext } from "@chakra-v2/utils"

export const [AvatarStylesProvider, useAvatarStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>",
})
