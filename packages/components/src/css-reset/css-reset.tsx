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

export type CSSResetProps = {
  elementClassName: string
}

export const CSSReset = ({ elementClassName: cls }: CSSResetProps) => (
  <Global
    styles={css`
      ${cls},
      ${cls}::before,
      ${cls}::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      ${cls}:where(hr) {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${cls}:where(pre, code, kbd, samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${cls}:where(a) {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${cls}:where(abbr[title]) {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${cls}:where(b, strong) {
        font-weight: bold;
      }

      .chakra-2:where(small) {
        font-size: 80%;
      }

      ${cls}:where(sub, sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${cls}:where(sub) {
        bottom: -0.25em;
      }

      ${cls}:where(sup) {
        top: -0.5em;
      }

      ${cls}:where(img) {
        border-style: none;
      }

      ${cls}:where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${cls}:where(button, input) {
        overflow: visible;
      }

      ${cls}:where(button, select) {
        text-transform: none;
      }

      ${cls}:where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${cls}:where(fieldset) {
        padding: 0.35em 0.75em 0.625em;
      }

      ${cls}:where(legend) {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${cls}:where(progress) {
        vertical-align: baseline;
      }

      ${cls}:where(textarea) {
        overflow: auto;
      }

      ${cls}:where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${cls}:where(input[type="number"])::-webkit-inner-spin-button,
      ${cls}:where(input[type="number"])::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${cls}:where(input[type="number"]) {
        -moz-appearance: textfield;
      }

      ${cls}:where(input[type="search"]) {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${cls}:where(input[type="search"])::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${cls}::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${cls}:where(details) {
        display: block;
      }

      ${cls}:where(summary) {
        display: list-item;
      }

      ${cls}:where(template) {
        display: none;
      }

      ${cls}:where([hidden]) {
        display: none !important;
      }

      ${cls}:where(
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

      ${cls}:where(button) {
        background: transparent;
        padding: 0;
      }

      ${cls}:where(fieldset) {
        margin: 0;
        padding: 0;
      }

      ${cls}:where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${cls}:where(textarea) {
        resize: vertical;
      }

      ${cls}:where(button, [role="button"]) {
        cursor: pointer;
      }

      ${cls}:where(button)::-moz-focus-inner {
        border: 0 !important;
      }

      ${cls}:where(table) {
        border-collapse: collapse;
      }

      ${cls}:where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${cls}:where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${cls}:where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${cls}:where(img, video) {
        max-width: 100%;
        height: auto;
      }

      ${cls}[data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${cls}:where(select)::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `}
  />
)
