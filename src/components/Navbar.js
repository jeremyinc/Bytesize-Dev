import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import routes from "../constants/routes.js"
import SEO from "./SEO.js"
import { color, spacing, typography } from "../constants/styles.js"

const StyledNav = styled.div`
  width: 100%;
  background-color: ${color.primary};
  position: fixed;
  z-index: 100;
  div {
    ul {
      display: flex;
      flex-flow: row nowrap;
      li {
        padding: ${spacing.padding.xsmall}px 0;
        font-size: ${typography.size.s2}rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        opacity: 1;
      }
      .navbar__links {
        a {
          color: white;
          padding: ${spacing.padding.xsmall}px ${spacing.padding.small}px;
          transition: 0.25s ease-in-out;
          :hover {
            transition: 0.25s ease-in-out;
            background-color: ${color.magenta};
          }
        }
      }
    }
    .navbar__left {
      margin-right: auto;
      a {
        color: white;
        font-family: ${typography.family.display};
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
