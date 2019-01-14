import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author-description">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="author-image"
            />
            <div>
              <span className="author-name-prefix">Written by</span>
              <span className="author-name">{author}</span>.
              <div className="author-introduction">{introduction}</div>
            </div>
          </div>
          <p className="author-socials">
            <a href={`https://github.com/${social.github}`}>GitHub</a>
            <a href={`https://medium.com/${social.medium}`}>Medium</a>
            <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
            <a href={`https://www.facebook.com/${social.facebook}`}>Facebook</a>
          </p>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpeg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
        }
      }
    }
  }
`

export default Bio
