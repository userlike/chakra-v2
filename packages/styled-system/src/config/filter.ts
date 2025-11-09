import * as CSS from "csstype"
import { Config } from "../utils/prop-config"
import { Length, Token, t, transforms } from "../utils"

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur((theme) => `--${theme.config.cssVarPrefix}-blur`),
  brightness: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-brightness`,
    transforms.brightness,
  ),
  contrast: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-contrast`,
    transforms.contrast,
  ),
  hueRotate: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-hue-rotate`,
    transforms.hueRotate,
  ),
  invert: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-invert`,
    transforms.invert,
  ),
  saturate: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-saturate`,
    transforms.saturate,
  ),
  dropShadow: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-drop-shadow`,
    transforms.dropShadow,
  ),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur(
    (theme) => `--${theme.config.cssVarPrefix}-backdrop-blur`,
  ),
  backdropBrightness: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-backdrop-brightness`,
    transforms.brightness,
  ),
  backdropContrast: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-backdrop-contrast`,
    transforms.contrast,
  ),
  backdropHueRotate: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-backdrop-hue-rotate`,
    transforms.hueRotate,
  ),
  backdropInvert: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-backdrop-invert`,
    transforms.invert,
  ),
  backdropSaturate: t.propT(
    (theme) => `--${theme.config.cssVarPrefix}-backdrop-saturate`,
    transforms.saturate,
  ),
}

export interface FilterProps {
  /**
   * The CSS `filter` property. When set to `auto`, you allow
   * Chakra UI to define the color based on the filter style props
   * (`blur`, `saturate`, etc.)
   */
  filter?: Token<CSS.Property.Filter | "auto">
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--chakra-filter` css variable
   */
  blur?: Token<{}, "blur">
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--chakra-brightness` css variable
   */
  brightness?: Token<Length>
  /**
   * Sets the contrast filter value of an element.
   * Value is assigned to `--chakra-contrast` css variable
   */
  contrast?: Token<Length>
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--chakra-hue-rotate` css variable
   */
  hueRotate?: Token<Length>
  /**
   * Sets the invert filter value of an element.
   * Value is assigned to `--chakra-invert` css variable
   */
  invert?: Token<Length>
  /**
   * Sets the saturation filter value of an element.
   * Value is assigned to `--chakra-saturate` css variable
   */
  saturate?: Token<Length>
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--chakra-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `backdrop-filter` property. When set to `auto`, you allow
   * Chakra UI to define the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc.)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | "auto">
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--chakra-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, "blur">
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--chakra-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--chakra-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--chakra-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--chakra-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--chakra-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>
}
