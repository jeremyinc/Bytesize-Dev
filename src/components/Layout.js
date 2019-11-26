import React from "react"
import styled from "@emotion/styled"
import mq from "./Utilities/MediaQuery.js"
import { css } from "@emotion/core"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import "./Layout.css"

var StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .site__container {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-flow: row wrap;
  }
  [class*="col"] {
    margin-left: 4%;
  }
  .col-1 {
    width: 12%;
    ${mq[0]} {
      width: 92%;
    }
  }
  .col-2 {
    width: 28%;
    ${mq[0]} {
      width: 92%;
    }
  }
  .col-3 {
    width: 44%;
    ${mq[0]} {
      width: 92%;
    }
  }
  .col-4 {
    width: 60%;
    ${mq[0]} {
      width: 92%;
    }
  }
  .col-5 {
    width: 76%;
    ${mq[0]} {
      width: 92%;
    }
  }
  .col-6 {
    width: 92%;
    ${mq[0]} {
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
    background-color: var(--accent-hover);
  }
`

const Layout = props => {
  return (
    <StyledLayout>
      <Navbar />
      {props.children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout
