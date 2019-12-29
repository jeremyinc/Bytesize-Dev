import React from "react"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./CodeBlock.js"
import PostLink from "./PostLink.js"
import styled from "@emotion/styled"
import PostIntro from "./PostIntro.js"
import CodeKeyword from "./CodeKeyword"
import PostTags from "./PostTags"
import { color, spacing, typography } from "../../constants/styles.js"

const CustomRenderers = {
  code: CodeBlock,
  link: PostLink,
  strong: CodeKeyword,
}

var StyledBody = styled.div`
  h2 {
    font-size: ${typography.size.l1}rem;
    font-family: "Calibre-Semibold";
    letter-spacing: -0.015em;
    margin-top: ${spacing.padding.medium}px;
    margin-bottom: ${spacing.padding.small}px;
  }
  h3 {
    font-size: ${typography.size.s3}rem;
    /* background-color: rgba(230, 0, 190, 0.2);
    padding: 4px 18px;
    border-radius: 12px; */
    font-family: "Calibre-Medium";
    color: ${color.magenta};
    letter-spacing: 0.075em;
    text-transform: uppercase;
    margin-bottom: ${spacing.padding.xsmall}px;
  }
  ol {
    li {
      font-size: ${typography.size.m1}rem;
      list-style-position: inside;
      line-height: 1.5em;
      ::before {
        /*  have to use to \\ */
        content: "\\2022";
        margin-right: 10px;
        color: ${color.magenta};
      }
    }
    margin-bottom: ${spacing.padding.small}px;
  }
  p {
    font-size: ${typography.size.m1}rem;
    color: ${color.black};
    line-height: 1.5em;
    margin-bottom: ${spacing.padding.small}px;
  }
  p:first-child:first-letter {
    font-size: calc(1.5 * ${typography.size.l3}rem);
    font-family: "Calibre-Semibold";
    margin-top: 15px;
    margin-right: 5px;
    float: left;
  }
`

const PostBody = ({ post }) => {
  return (
    <StyledBody>
      <ReactMarkdown
        source={post.postContent.postContent}
        renderers={CustomRenderers}
      ></ReactMarkdown>
      <PostTags tags={post.postTags} />
    </StyledBody>
  )
}

export default PostBody
