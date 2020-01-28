import { Global, css } from "@emotion/core"
import mq from "./Utilities/MediaQuery"
import { color, spacing, typography } from "../constants/styles.js"
import React from "react"
import CalibreRegular from "./fonts/CalibreTest-Regular.woff"
import CalibreMedium from "./fonts/CalibreTest-Medium.woff"
import CalibreSemibold from "./fonts/CalibreTest-Semibold.woff"
import GTBold from "./fonts/GT-Pressura-Pro-Mono-Trial-Bold.otf"
import GTRegular from "./fonts/GT-Pressura-Pro-Mono-Trial-Regular.otf"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Calibre-Regular";
          src: url(${CalibreRegular}) format("woff");
        }
        @font-face {
          font-family: "Calibre-Medium";
          src: url(${CalibreMedium}) format("woff");
        }
        @font-face {
          font-family: "Calibre-Semibold";
          src: url(${CalibreSemibold}) format("woff");
        }
        @font-face {
          font-family: "GT-Pressura-Pro-Mono-Bold";
          src: url(${GTBold}) format("opentype");
        }
        @font-face {
          font-family: "GT-Pressura-Pro-Mono-Trial-Regular";
          src: url(${GTRegular}) format("opentype");
        }
        :root {
          font-family: "Calibre-Regular";
          font-size: 10px;
          --accent-primary: #1200e5;
          --accent-hover: #e500bf;
          --black-primary: #19191a;
          --grey-secondary: #646468;

          --space-xxsmall: 5px;
          --space-xsmall: 15px;
          --space-small: 30px;
          --space-medium: 45px;
          --space-large: 60px;
          --space-xlarge: 90px;
          --space-xxlarge: 120px;

          --type-normalInteractionText: 1.6rem;
          --type-smallInteractionText: 1.3rem;
        }

        /* html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          list-style-type: none;
        } */

        body {
          color: var(--black-primary);
          background-color: white;
        }

        a {
          text-decoration: none;
        }
        [class*="col"] {
          margin-left: 4%;
        }
        .col-1 {
          width: 12%;
          ${mq[1]} {
            width: 92%;
          }
        }
        .col-2 {
          width: 28%;
          ${mq[1]} {
            width: 92%;
          }
        }
        .col-3 {
          width: 44%;
          ${mq[1]} {
            width: 92%;
          }
        }
        .col-4 {
          width: 60%;
          ${mq[1]} {
            width: 92%;
          }
        }
        .col-5 {
          width: 76%;
          ${mq[1]} {
            width: 92%;
          }
        }
        .col-6 {
          width: 92%;
          ${mq[1]} {
            width: 92%;
          }
        }
        .link__underline {
          a {
            :before {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: -5px;
              left: 0;
              background-color: white;
              visibility: hidden;
              -webkit-transform: scaleX(0);
              transform: scaleX(0);
              -webkit-transition: all 0.3s ease-in-out 0s;
              transition: all 0.3s ease-in-out 0s;
            }
            :hover:before {
              visibility: visible;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }
        }
        .link__active {
          background-color: ${color.magenta};
        }
      `}
    />
  )
}

export default GlobalStyles
