import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import routes from "../constants/routes.js"
import SEO from "./SEO.js"

const StyledNav = styled.div`
  width: 100%;
  background-color: var(--accent-primary);
  font-family: "Calibre-Regular";
  position: fixed;
  z-index: 100;
  div {
    ul {
      display: flex;
      flex-flow: row nowrap;
      li {
        padding: var(--space-xsmall) 0;
        font-size: var(--type-normalInteractionText);
        text-transform: uppercase;
        letter-spacing: 0.15em;
        opacity: 1;
      }
      .navbar__links {
        a {
          color: white;
          padding: var(--space-xsmall) var(--space-small);
          transition: 0.25s ease-in-out;
          :hover {
            transition: 0.25s ease-in-out;
            background-color: var(--accent-hover);
          }
        }
      }
    }
    .navbar__left {
      margin-right: auto;
      a {
        color: white;
        font-family: "GT-Pressura-Pro-Mono-Trial-Regular";
      }
    }
    .navbar__right {
      margin-left: auto;
      margin-right: 2%;
      align-self: flex-end;
    }
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <div className="site__container">
        <ul className="navbar__left col-2">
          <li>
            <Link to="/">Bytesize Dev</Link>
          </li>
        </ul>
        <ul className="navbar__right">
          {routes.map((route, index) => {
            return (
              <li className="navbar__links" key={index}>
                <Link activeClassName="link__active" to={route.path}>
                  {route.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </StyledNav>
  )
}

export default Navbar
