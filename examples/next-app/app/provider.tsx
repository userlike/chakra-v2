"use client"

import { ChakraProvider, cookieStorageManager } from "@chakra-v2/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider colorModeManager={cookieStorageManager}>
      {children}
    </ChakraProvider>
  )
}
