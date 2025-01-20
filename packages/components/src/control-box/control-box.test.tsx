import { testA11y } from "@chakra-v2/test-utils"
import { ControlBox } from "./control-box"

test("passes a11y test", async () => {
  await testA11y(<ControlBox />)
})
