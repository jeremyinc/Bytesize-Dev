import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import routes from "../constants/routes.js"
import social from "../constants/social.js"
import { useStaticQuery, graphql } from "gatsby"
import mq from "./Utilities/MediaQuery"

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
  background-color: var(--accent-primary);
  margin-top: auto;
  padding-bottom: var(--space-large);
  font-size: 1.6rem;
  color: white;
  div {
    align-items: baseline;
    ul {
      display: flex;
      flex-flow: row nowrap;
      padding: var(--space-small) 0;
      ${mq[3]} {
        background-color: var(--accent-primary);
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
          padding-top: var(--space-small);
        }
      }
      &.footer__right {
        text-transform: uppercase;
        letter-spacing: 0.05em;
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
        <ul className="footer__left col-2">
          <li>{siteMetadata.description}</li>
          <li className="footer__rights">all rights reserved 2019</li>
        </ul>
        <ul className="footer__right col-2">
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
    </StyledFooter>
  )
}

export default Footer
