import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class IndexRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column post is-4" key={post.id}>
              <article className="columns is-multiline">
                <div className="column is-12 featured-content ">
                  <h3 className="heading post-category">News and Updates</h3>
                  <Link className="is-size-4" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  {/* <span> &bull; </span> */}
                  <span className="is-size-6 is-block">
                    {post.frontmatter.date}
                  </span>
                </div>
                <p className="is-size-6 m-2">
                  {post.frontmatter.description}
                  <br />
                  <br />
                  <Link className="btn" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

IndexRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function IndexRollQuery() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            limit: 9
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  description
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 240
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <IndexRoll data={data} count={count} />}
    />
  )
}
