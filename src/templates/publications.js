import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../components/accordion.sass'
import Layout from '../components/Layout'
import SeO from '../components/seo'
import CustomAccordion from '../components/accordion'

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PubllicationsQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "publications" } }) {
        frontmatter {
          title
          description
          date(formatString: "YYYY年MM月DD日 ")
          templateKey
          lang
          journal
          conference
          oral
        }
      }
      allResearchCsv {
        nodes {
          field1
          field2
          field3
          field4
          field5
          field6
          field7
          field8
          id
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
                  {post.title}
                </h2>
                <p>
                  {post.date}現在，{post.journal + post.conference + post.oral}{' '}
                  の業績があります.
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
                          論文
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
                          国際会議
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
                          口頭発表
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
以下の<a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/show.php" target="_blank" rel="noopener noreferrer" title="岡田／山里研究室 研究業績">
                    岡田／山里研究室 研究業績
                  </a>
                  のページもご参照ください．
                <ul class="list1 list-indent1"><li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=1" rel="nofollow">論文</a></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=2" rel="nofollow">国際会議</a></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=3" rel="nofollow">研究会・シンポジウム</a></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=4" rel="nofollow">全国大会</a></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=5" rel="nofollow">その他の学会など</a></li>

              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=6" rel="nofollow">学位論文</a>
              <ul class="list2 list-indent1"><li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=6&amp;pubid=2" rel="nofollow">博士論文</a></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=6&amp;pubid=3" rel="nofollow">修士論文</a></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=6&amp;pubid=4" rel="nofollow">卒業論文</a>
              <div class="spacer">&nbsp;</div></li>
              </ul></li>
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=7" rel="nofollow">著書</a></li>
               <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=8" rel="nofollow">報道発表</a></li>
               <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/index.php?sort=9" rel="nofollow">標準化会議</a></li>
<br />          
              <li><a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/search.php" rel="nofollow">検索</a></li>
              </ul>
<hr />
                {data.allResearchCsv.nodes.map((node) => (
                  <CustomAccordion
                    key={node.id}
                    title={node.field2}
                    author={node.field1}
                    journal={node.field3}
                    published={node.field5}
                    doi={node.field6}
                    abstract={node.field4}
                    year={node.field7}
                    publication_type={node.field8}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
