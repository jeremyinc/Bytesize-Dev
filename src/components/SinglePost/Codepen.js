import React from "react"
import styled from "@emotion/styled"
import { color, spacing, typography } from "../../constants/styles.js"
import Img from "gatsby-image"
import { FaCodepen } from "react-icons/fa"

const StyledCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.25);
  border: 4px solid #7266ff;
  transition: opacity 0.5s ease;
  opacity: ${props => (props.show ? 1 : 0)};
  svg {
    font-size: ${typography.size.l1}rem;
    transition: 0.15s ease-in-out;
    -webkit-transition: 0.15s ease-in-out;
    color: ${color.black};
    :hover {
      color: #7266ff;
      transition: 0.15s ease-in-out;
      -webkit-transition: 0.15s ease-in-out;
    }
  }
`

var { useState, useEffect } = React

const Codepen = props => {
  var [state, setState] = useState(true)
  //   var CodepenRef = document.querySelector(".post__codepen")
  var articleHeight = props.postHeight.height - 980

  // if (window !== undefined) {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > articleHeight && state) {
  //       //   CodepenRef.style.opacity = 0.2
  //       setState(curState => (state = false))
  //     } else if (window.scrollY < articleHeight && !state) {
  //       //   CodepenRef.style.opacity = 1
  //       setState(curState => (state = true))
  //     }
  //   })
  // }

  return (
    <StyledCircle className="post__codepen" show={state}>
      <a
        href="https://codepen.io/jeremythemodernist/pen/wvvZmJP"
        target="_blank"
      >
        <FaCodepen />
      </a>
    </StyledCircle>
  )
}

export default Codepen
