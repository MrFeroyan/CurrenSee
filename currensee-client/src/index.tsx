import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

import 'polyfill-object.fromentries'

import { AppProviders } from './AppProviders'
import reportWebVitals from './reportWebVitals'

const GlobalAppStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  body {
    font-family: 'Open Sans';
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-size: 1rem;
  }

  html * {
    box-sizing: inherit;
  }

  /* https://cssreset.com/scripts/eric-meyer-reset-css/ */
  /* http://html5doctor.com/html-5-reset-stylesheet/ */
  *, h1 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  hr {
    border-top: 1px inset;
  }

  /* From  defaultRootStyle in /imports/app/molecules/Buttons/Button/styles */
  button {
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  body.using-mouse &:focus {
    outline: none;
    box-shadow: none;
  }

  li.root {
    display: block;
  }

  /* This is a rule to hide all marketing pixels which are attached to body. */
  /* In some cases they are causing visual artifacts, that's why we always want to be sure */
  /* that they are hidden */
  body > img {
    position: absolute;
    top: 0;
    right: 200%;
  }

  img {
    pointer-events: none;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <Normalize />
        <GlobalAppStyles />
        <AppProviders />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
