import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { List } from './index'

const Latest = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            filter: { fields: { hash: { eq: "news" } } }
            sort: { fields: frontmatter___date, order: DESC }
            limit: 4
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  description
                  path
                  category
                  date
                  image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        return <List items={data.allMarkdownRemark.edges} />
      }}
    />
  )
}

export default Latest
