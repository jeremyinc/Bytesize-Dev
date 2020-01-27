import React from "react"
import styled from "@emotion/styled"
import { color, spacing, typography } from "../../constants/styles.js"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

var StyledShare = styled.div`
  h3 {
    color: ${color.gray8};
    font-size: ${typography.size.s3}rem;
    text-transform: capitalize;
    letter-spacing: 0.025em;
    font-family: "Calibre-Regular";
    margin-bottom: ${spacing.padding.small}px;
  }
  .social__wrapper {
    display: flex;
    flex-flow: row wrap;
  }
  a {
    display: flex;
    flex-flow: row wrap;
    padding: ${spacing.padding.xsmall}px ${spacing.padding.small}px;
    align-items: center;
    border-radius: ${spacing.borderRadius.small}px;
    font-size: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin-right: ${spacing.padding.xsmall}px;
    transition: 0.25s ease-in-out;
    cursor: pointer;
    :hover {
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
      transition: 0.25s ease-in-out;
    }
    &.twitter {
      background-color: #007dfa;
      color: white;
      /* :hover {
        background-color: #0074d9;
        transition: 0.25s ease-in-out;
      } */
    }
    span {
      margin-left: 10px;
    }
    &.linkedin {
      /* background-color: #f5f5fa; */
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: #007dfa;
    }
  }
  button {
  }
`

const SocialShare = ({ post }) => {
  return (
    <StyledShare>
      {/* https://mariohernandez.io/blog/adding-social-share-links-to-gatsby/ */}
      {/* https://jonsuh.com/blog/social-share-links/ */}
      <h3>Enjoy this Article. Spread the Word:</h3>
      <div className="social__wrapper">
        <a
          className="twitter-share-button twitter"
          href={`https://twitter.com/intent/tweet?text=${post.postTitle}&url=https://bytesizedev.com/${post.slug}&via=JeremyStuBarnes`}
        >
          <FaTwitter />
          <span>Tweet</span>
        </a>
        {/* https://css-tricks.com/simple-social-sharing-links/ */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://bytesizedev.com&title=${post.postTitle}&summary=${post.postDescription.postDescription}`}
          className="linkedin"
        >
          <FaLinkedin />
          <span>Share</span>
        </a>
        {/* <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://bytesizedev.com`}
          target="_blank"
        >
          Share on LinkedIn
        </a> */}
      </div>
    </StyledShare>
  )
}

export default SocialShare
