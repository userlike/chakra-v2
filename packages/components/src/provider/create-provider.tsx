import { Theme } from "@chakra-v2/theme"
import { Dict } from "@chakra-v2/utils"
import {
  createToastStore,
  ToastOptionProvider,
  ToastProvider,
  ToastProviderProps,
  type ToastStore,
} from "../toast"
import { Provider, ProviderProps } from "./provider"
import { ToastStoreProvider } from "../toast/toast.provider"
import { useMemo } from "react"

export interface ChakraProviderProps extends ProviderProps {
  toastStore?: ToastStore
  disableToasts?: boolean
  /**
   * Provide defaults for `useToast()` usages for `ChakraProvider`s children
   */
  toastOptions?: ToastProviderProps
}

export type ChakraProviderComponent = React.FC<ChakraProviderProps>

export const createProvider = (
  providerTheme: Theme | (Omit<Theme, "components"> & { components: Dict }),
): ChakraProviderComponent => {
  return function ChakraProvider({
    children,
    theme = providerTheme,
    disableToasts = false,
    toastStore: toastStore_,
    toastOptions,
    ...restProps
  }: ChakraProviderProps) {
    const toastStore = useMemo(
      () => toastStore_ ?? createToastStore(),
      [toastStore_],
    )

    if (disableToasts) {
      return (
        <Provider theme={theme} {...restProps}>
          {children}
        </Provider>
      )
    }

    return (
      <Provider theme={theme} {...restProps}>
        <ToastStoreProvider value={toastStore}>
          <ToastOptionProvider value={toastOptions?.defaultOptions}>
            {children}
          </ToastOptionProvider>
          <ToastProvider {...toastOptions} />
        </ToastStoreProvider>
      </Provider>
    )
  }
}
