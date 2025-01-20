import { Global } from "@emotion/react"

const css = String.raw

const vhPolyfill = css`
  :root,
  :host {
    --chakra-v2-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-v2-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-v2-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-v2-vh: 100dvh;
    }
  }
`

export const CSSPolyfill = () => <Global styles={vhPolyfill} />

export type CSSResetProps = {}

export const CSSReset = () => (
  <Global
    styles={css`
      .chakra-v2,
      .chakra-v2::before,
      .chakra-v2::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      .chakra-v2:where(hr) {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      .chakra-v2:where(pre, code, kbd, samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      .chakra-v2:where(a) {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      .chakra-v2:where(abbr[title]) {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      .chakra-v2:where(b, strong) {
        font-weight: bold;
      }

      .chakra-2:where(small) {
        font-size: 80%;
      }

      .chakra-v2:where(sub, sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      .chakra-v2:where(sub) {
        bottom: -0.25em;
      }

      .chakra-v2:where(sup) {
        top: -0.5em;
      }

      .chakra-v2:where(img) {
        border-style: none;
      }

      .chakra-v2:where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      .chakra-v2:where(button, input) {
        overflow: visible;
      }

      .chakra-v2:where(button, select) {
        text-transform: none;
      }

      .chakra-v2:where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      .chakra-v2:where(fieldset) {
        padding: 0.35em 0.75em 0.625em;
      }

      .chakra-v2:where(legend) {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      .chakra-v2:where(progress) {
        vertical-align: baseline;
      }

      .chakra-v2:where(textarea) {
        overflow: auto;
      }

      .chakra-v2:where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      .chakra-v2:where(input[type="number"])::-webkit-inner-spin-button,
      .chakra-v2:where(input[type="number"])::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      .chakra-v2:where(input[type="number"]) {
        -moz-appearance: textfield;
      }

      .chakra-v2:where(input[type="search"]) {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      .chakra-v2:where(input[type="search"])::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      .chakra-v2::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      .chakra-v2:where(details) {
        display: block;
      }

      .chakra-v2:where(summary) {
        display: list-item;
      }

      .chakra-v2:where(template) {
        display: none;
      }

      .chakra-v2:where([hidden]) {
        display: none !important;
      }

      .chakra-v2:where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      .chakra-v2:where(button) {
        background: transparent;
        padding: 0;
      }

      .chakra-v2:where(fieldset) {
        margin: 0;
        padding: 0;
      }

      .chakra-v2:where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      .chakra-v2:where(textarea) {
        resize: vertical;
      }

      .chakra-v2:where(button, [role="button"]) {
        cursor: pointer;
      }

      .chakra-v2:where(button)::-moz-focus-inner {
        border: 0 !important;
      }

      .chakra-v2:where(table) {
        border-collapse: collapse;
      }

      .chakra-v2:where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      .chakra-v2:where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      .chakra-v2:where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      .chakra-v2:where(img, video) {
        max-width: 100%;
        height: auto;
      }

      .chakra-v2[data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      .chakra-v2:where(select)::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `}
  />
)
