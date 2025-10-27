import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Layout from '../components/LayoutEN-white'
import Layout from '../components/LayoutEnWhite'
import SeO from '../components/seo'
import ExtLink from '../components/ExtLink'

export default function PublicationsEn() {
  const data = useStaticQuery(graphql`
    query PubllicationsEnQuery {
      allResearchEnCsv {
        nodes {
          field1
          field2
          field3
          field4
          field5
          field6
          id
        }
      }
      site {
        siteMetadata {
          description
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "publications-en" } }) {
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          templateKey
          lang
          journal
          conference
          oral
        }
      }
    }
  `)

  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SeO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section content">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {data.markdownRemark.frontmatter.title}
                </h2>
                <p>
                  As of {post.date}, we published and presented{' '}
                  {post.journal + post.conference + post.oral} articles.
                  <br />
                 
                </p>
                <div className="columns">
                  <div className="column">
                    <div className="gold-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">
                          {post.journal}
                        </div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">
                          Journal Articles
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="silver-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">
                          {post.conference}
                        </div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">
                          Peer-Reviewed Conference Papers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="bronze-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">
                          {post.oral}
                        </div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">
                          Oral Presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
 Please also refer to {' '}
                  <a
                    href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/show-e.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Okada Laboratory / Yamazato Laboratory research results page"
                  >
                    Okada Laboratory / Yamazato Laboratory research results page
                  </a>
                  . The links to the database are the following:
<ul class="list1 list-indent1"><li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/index-e.php?sort=1" rel="nofollow">Publications</a></li>
<li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/index-e.php?sort=2" rel="nofollow">International Conference and Symposium</a></li>
<li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/index-e.php?sort=3" rel="nofollow">Technical Report (IEICE)</a></li>
<li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/index-e.php?sort=4" rel="nofollow">General Conference (IEICE)</a></li>
<li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/index-e.php?sort=5" rel="nofollow">Other Conference</a></li>
<li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/index-e.php?sort=6&amp;pubid=2" rel="nofollow">Doctor Dissertations</a></li></ul>
<ul class="list1 list-indent1"><li><a href="http://www.katayama.nuee.nagoya-u.ac.jp/dbase/search-e.php" rel="nofollow">Search</a></li></ul>
<hr />
                <ul>
                  {data.allResearchEnCsv.nodes.map((node) => (
                    <li key={node.id}>
                      <h3 className="is-size-4">{node.field2}</h3>
                      <ul>
                        <li>{node.field1}</li>
                        <li>{node.field3}</li>
                        <li>{node.field5}</li>
                        <li className="nodot">
                          {' '}
                          <ExtLink to={node.field6} />
                        </li>
                        <li className="nodot">{node.field4}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
