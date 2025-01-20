import { SystemStyleObject } from "@chakra-v2/styled-system"
import { createContext } from "@chakra-v2/utils"

export const [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `,
})
