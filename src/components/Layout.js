import React from "react"
import styled from "@emotion/styled"
import mq from "./Utilities/MediaQuery.js"
import { css } from "@emotion/core"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Global from "./Global.js"

import { color, spacing, typography } from "../constants/styles.js"

var StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .site__container {
    max-width: 1600px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-flow: row wrap;
  }
`

const Layout = props => {
  console.log("YOUR PROCESS VAR IS", process)
  return (
    <>
      <Global />
      <StyledLayout>
        <Navbar />
        {props.children}
        <Footer />
      </StyledLayout>
    </>
  )
}

export default Layout
