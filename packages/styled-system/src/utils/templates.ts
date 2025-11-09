/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
function getTransformTemplate_(theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return [
    `rotate(var(--${prefix}-rotate, 0))`,
    `scaleX(var(--${prefix}-scale-x, 1))`,
    `scaleY(var(--${prefix}-scale-y, 1))`,
    `skewX(var(--${prefix}-skew-x, 0))`,
    `skewY(var(--${prefix}-skew-y, 0))`,
  ]
}

export function getTransformTemplate(theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return [
    `translateX(var(--${prefix}-translate-x, 0))`,
    `translateY(var(--${prefix}-translate-y, 0))`,
    ...getTransformTemplate_(theme),
  ].join(" ")
}

export function getTransformGpuTemplate(theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return [
    `translate3d(var(--${prefix}-translate-x, 0), var(--${prefix}-translate-y, 0), 0)`,
    ...getTransformTemplate_(theme),
  ].join(" ")
}

export function getFilterTemplate(theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return {
    [`--${prefix}-blur`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-brightness`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-contrast`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-grayscale`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-hue-rotate`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-invert`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-saturate`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-sepia`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    [`--${prefix}-drop-shadow`]: "var(--${prefix}-empty,/*!*/ /*!*/)",
    filter: [
      `var(--${prefix}-blur)`,
      `var(--${prefix}-brightness)`,
      `var(--${prefix}-contrast)`,
      `var(--${prefix}-grayscale)`,
      `var(--${prefix}-hue-rotate)`,
      `var(--${prefix}-invert)`,
      `var(--${prefix}-saturate)`,
      `var(--${prefix}-sepia)`,
      `var(--${prefix}-drop-shadow)`,
    ].join(" "),
  }
}

export function getBackdropFilterTemplate(theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return {
    backdropFilter: [
      `var(--${prefix}-backdrop-blur)`,
      `var(--${prefix}-backdrop-brightness)`,
      `var(--${prefix}-backdrop-contrast)`,
      `var(--${prefix}-backdrop-grayscale)`,
      `var(--${prefix}-backdrop-hue-rotate)`,
      `var(--${prefix}-backdrop-invert)`,
      `var(--${prefix}-backdrop-opacity)`,
      `var(--${prefix}-backdrop-saturate)`,
      `var(--${prefix}-backdrop-sepia)`,
    ].join(" "),
    [`--${prefix}-backdrop-blur`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-brightness`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-contrast`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-grayscale`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-hue-rotate`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-invert`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-opacity`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-saturate`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
    [`--${prefix}-backdrop-sepia`]: `var(--${prefix}-empty,/*!*/ /*!*/)`,
  }
}

export function getRingTemplate(value: any, theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return {
    [`--${prefix}-ring-offset-shadow`]: `var(--${prefix}-ring-inset) 0 0 0 var(--${prefix}-ring-offset-width) var(--${prefix}-ring-offset-color)`,
    [`--${prefix}-ring-shadow`]: `var(--${prefix}-ring-inset) 0 0 0 calc(var(--${prefix}-ring-width) + var(--${prefix}-ring-offset-width)) var(--${prefix}-ring-color)`,
    [`--${prefix}-ring-width`]: value,
    boxShadow: [
      `var(--${prefix}-ring-offset-shadow)`,
      `var(--${prefix}-ring-shadow)`,
      `var(--${prefix}-shadow, 0 0 #0000)`,
    ].join(", "),
  }
}

export function getFlexDirectionTemplate(theme: Record<string, any>) {
  const prefix = theme.config.cssVarPrefix
  return {
    "row-reverse": {
      space: `--${prefix}-space-x-reverse`,
      divide: `--${prefix}-divide-x-reverse`,
    },
    "column-reverse": {
      space: `--${prefix}-space-y-reverse`,
      divide: `--${prefix}-divide-y-reverse`,
    },
  }
}
