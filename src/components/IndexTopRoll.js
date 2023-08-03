import React from "react";
// import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class IndexTopRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="content">
        <ul>
          <h1 className="is-size-6">
            <Link to="/news">Latest News</Link>
          </h1>
          <blockquote>
            {posts &&
              posts.map(({ node: post }) => (
                <li>
                  {" "}
                  <Link className="is-size-6" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  &nbsp;&nbsp;-- {post.frontmatter.date}
                </li>
              ))}
          </blockquote>
        </ul>
      </div>
    );
  }
}

export default function IndexTopRollQuery() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { templateKey: { eq: "blog-post" } } }, limit: 3) {
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
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <IndexTopRoll data={data} count={count} />}
    />
  );
}
