import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import routes from "../constants/routes.js"
import SEO from "./SEO.js"
import { color, spacing, typography } from "../constants/styles.js"
import Logo from "../images/Bytesize_Icon.png"

const StyledNav = styled.div`
  width: 100%;
  background-color: ${color.primary};
  position: fixed;
  z-index: 100;
  div {
    align-items: center;
    ul {
      display: flex;
      flex-flow: row nowrap;
      li {
        padding: ${spacing.padding.xxsmall}px 0;
        font-size: ${typography.size.s2}rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        opacity: 1;
        cursor: pointer;
      }
      .navbar__links {
        a {
          color: white;
          padding: 21px ${spacing.padding.small}px;
          transition: 0.25s ease-in-out;
          cursor: pointer;
          :hover {
            transition: 0.25s ease-in-out;
            background-color: ${color.magenta};
          }
        }
      }
    }
    .navbar__left {
      margin-right: auto;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      a {
        color: white;
        font-family: ${typography.family.display};
        font-size: ${typography.size.s3}rem;
      }
      img {
        width: 46px;
        margin-right: ${spacing.padding.xsmall}px;
      }
    }
    .navbar__right {
      margin-left: auto;
      margin-right: 2%;
    }
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <div className="site__container">
        <ul className="navbar__left col-2">
          <li>
            <img src={Logo} />
          </li>
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
