"use client"
import { Button, useColorMode } from "@chakra-v2/react"

export function ColorModeToggle() {
  const { toggleColorMode } = useColorMode()
  return <Button onClick={toggleColorMode}>Click me</Button>
}
