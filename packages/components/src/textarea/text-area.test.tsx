import { render, testA11y } from "@chakra-v2/test-utils"
import { Textarea } from "."

test("Textarea renders correctly", async () => {
  const { container } = render(
    <Textarea aria-label="Enter notes" defaultValue="hello" />,
  )
  await testA11y(container)
})
