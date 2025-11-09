import type { ThemeScale } from "../create-theme-vars"
import { createTransform } from "./create-transform"
import { logical, PropConfig, toConfig } from "./prop-config"
import { transformFunctions as transforms } from "./transform-functions"

export { transforms }

export * from "./types"

export const t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  gradients: toConfig("gradients", transforms.gradient),
  radii: toConfig("radii", transforms.px),
  space: toConfig("space", (value, theme) =>
    transforms.px(transforms.vh(value, theme)),
  ),
  spaceT: toConfig("space", (value, theme) =>
    transforms.px(transforms.vh(value, theme)),
  ),
  degreeT(property: PropConfig["property"]) {
    return { property, transform: transforms.degree }
  },
  prop(
    property: PropConfig["property"],
    scale?: ThemeScale,
    transform?: PropConfig["transform"],
  ) {
    return {
      property,
      scale,
      ...(scale && {
        transform: createTransform({ scale, transform }),
      }),
    }
  },
  propT(property: PropConfig["property"], transform?: PropConfig["transform"]) {
    return { property, transform }
  },
  sizes: toConfig("sizes", (value, theme) =>
    transforms.px(transforms.vh(value, theme)),
  ),
  sizesT: toConfig("sizes", (value, theme) =>
    transforms.fraction(transforms.vh(value, theme)),
  ),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transforms.blur),
}
