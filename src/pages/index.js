import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/Layout.js"
import SEO from "../components/SEO.js"

var StyledHome = styled.div`
  background-color: blue;
  color: white;
  width: 500px;
  height: 500px;
`

const Index = () => {
  return (
    <Layout>
      <SEO title="Bytesize Home" />
      gret stuff seriously! take a look around. Like what you see?
    </Layout>
  )
}

export default Index
