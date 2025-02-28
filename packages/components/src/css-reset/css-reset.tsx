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
      :where(.${cls}, .${cls}::before, .${cls}::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      hr:where(.${cls}) {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      :where(:is(pre, code, kbd, samp).${cls}) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a:where(.${cls}) {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      // Specifity = 2
      abbr[title]:where(.${cls}) {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      :where(:is(b, strong).${cls}) {
        font-weight: bold;
      }

      small:where(.${cls}) {
        font-size: 80%;
      }

      :where(:is(sub, sup).${cls}) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub:where(.${cls}) {
        bottom: -0.25em;
      }

      sup:where(.${cls}) {
        top: -0.5em;
      }

      img:where(.${cls}) {
        border-style: none;
      }

      :where(:is(button, input, optgroup, select, textarea).${cls}) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      :where(:is(button, input).${cls}) {
        overflow: visible;
      }

      :where(:is(button, select).${cls}) {
        text-transform: none;
      }

      :where(
          :is(
              button,
              [type="button"],
              [type="reset"],
              [type="submit"]
            ).${cls}::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      fieldset:where(.${cls}) {
        padding: 0.35em 0.75em 0.625em;
      }

      legend:where(.${cls}) {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress:where(.${cls}) {
        vertical-align: baseline;
      }

      textarea:where(.${cls}) {
        overflow: auto;
      }

      :where(:is([type="checkbox"], [type="radio"]).${cls}) {
        box-sizing: border-box;
        padding: 0;
      }

      input[type="number"]:where(.${cls})::-webkit-inner-spin-button,
      input[type="number"]:where(.${cls})::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"]:where(.${cls}) {
        -moz-appearance: textfield;
      }

      input[type="search"]:where(.${cls}) {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      input[type="search"]:where(.${cls})::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      :where(.${cls})::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details:where(.${cls}) {
        display: block;
      }

      summary:where(.${cls}) {
        display: list-item;
      }

      template:where(.${cls}) {
        display: none;
      }

      [hidden]:where(.${cls}) {
        display: none !important;
      }

      :where(
          :is(
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
            ).${cls}
        ) {
        margin: 0;
      }

      button:where(.${cls}) {
        background: transparent;
        padding: 0;
      }

      fieldset:where(.${cls}) {
        margin: 0;
        padding: 0;
      }

      :where(:is(ol, ul).${cls}) {
        margin: 0;
        padding: 0;
      }

      textarea:where(.${cls}) {
        resize: vertical;
      }

      :where(:is(button, [role="button"]).${cls}) {
        cursor: pointer;
      }

      button:where(.${cls})::-moz-focus-inner {
        border: 0 !important;
      }

      table:where(.${cls}) {
        border-collapse: collapse;
      }

      :where(:is(h1, h2, h3, h4, h5, h6).${cls}) {
        font-size: inherit;
        font-weight: inherit;
      }

      :where(:is(button, input, optgroup, select, textarea).${cls}) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      :where(
          :is(img, svg, video, canvas, audio, iframe, embed, object).${cls}
        ) {
        display: block;
      }

      :where(:is(img, video).${cls}) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :where(.${cls}):focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      select:where(.${cls})::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `}
  />
)
