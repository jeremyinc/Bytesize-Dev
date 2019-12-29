import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import routes from "../constants/routes.js"
import social from "../constants/social.js"
import { useStaticQuery, graphql } from "gatsby"
import mq from "./Utilities/MediaQuery"
import { color, spacing, typography } from "../constants/styles.js"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const StyledFooter = styled.div`
  width: 100%;
  background-color: ${color.primary};
  margin-top: auto;
  padding-bottom: ${spacing.padding.large}px;
  font-size: 1.6rem;
  color: white;
  div {
    align-items: baseline;
    ul {
      display: flex;
      flex-flow: row nowrap;
      padding: ${spacing.padding.small}px 0;
      width: 400px;
      ${mq[3]} {
        background-color: ${color.primary};
      }
      ${mq[2]} {
        width: 320px;
      }
      justify-content: space-around;
      align-items: center;
      font-size: 1.6rem;
      line-height: 1.5em;
      a {
        color: white;
        position: relative;
      }
      &.footer__left {
        font-family: "GT-Pressura-Pro-Mono-Trial-Regular";
        flex-flow: column nowrap;
        align-items: flex-start;
        margin-right: auto;
        .footer__rights {
          font-family: "Calibre-Medium";
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding-top: ${spacing.padding.small}px;
        }
      }
      &.footer__right {
        text-transform: uppercase;
        letter-spacing: 0.15em;
        justify-content: space-between;
        margin-left: auto;
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  var {
    site: { siteMetadata },
  } = data
  console.log("FOOTER DATA", siteMetadata)
  console.log("ALL SOCIAL", social)
  return (
    <StyledFooter>
      <div className="site__container">
        <div className=" col-3">
          <ul className="footer__left">
            <li>{siteMetadata.description}</li>
            <li className="footer__rights">all rights reserved 2019</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="footer__right">
            {social.map((platform, index) => {
              return (
                <li key={index} className="link__underline">
                  <a target="_blank" href={platform.path}>
                    {platform.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
