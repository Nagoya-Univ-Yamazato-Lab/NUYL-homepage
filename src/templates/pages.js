import * as React from 'react'
import { Link, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
// import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import SeO from '../components/seo'
import 'katex/dist/katex.min.css'

const PagesTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data
  const tags = post.frontmatter.tags

  return (
    <Layout location={location} title={siteTitle}>
      <SeO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <section className="section">
        <header>
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.frontmatter.description} />
        </header>
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {post.frontmatter.date}
              <h1 className="is-size-2 has-text-weight-bold">
                {post.frontmatter.title}
              </h1>
              <p>{post.frontmatter.description}</p>
              <hr />
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
                className="content"
              />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h2 className="is-size-4">Tags</h2>
                  <ul className="taglist">
                    {post.frontmatter.tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PagesTemplate

export const pageQuery = graphql`
  query PagesBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        lang
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
