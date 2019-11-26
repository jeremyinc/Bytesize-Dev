import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query GetSiteMetaData {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = props => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  return (
    <Helmet
      title={`${props.title} | ${siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: siteMetadata.description,
        },
      ]}
    ></Helmet>
  )
}

SEO.defaultProps = {
  title: "Bytesize",
}

export default SEO
