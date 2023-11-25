import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../components/accordion.sass";
import Layout from "../components/Layout";
import SeO from "../components/seo";
import CustomAccordion from "../components/accordion";

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
  `);

  const post = data.markdownRemark.frontmatter;

  const accordionData = [
    {
      title: <>Accordion 1</>,
      content: (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </>
      ),
    },
    {
      title: <>Accordion 2</>,
      content: (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </>
      ),
    },
    {
      title: <>Accordion 3</>,
      content: (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </>
      ),
    },
  ];
  
  return (
  
    <Layout>
      <SeO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section content">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{post.title}</h2>
                <p>
                  {post.date}現在，{post.journal + post.conference + post.oral} の業績があります.
                  <br />
                  <a href="https://www.katayama.nuee.nagoya-u.ac.jp/dbase/show.php" target="_blank" rel="noopener noreferrer" title="片山研究室／山里研究室 研究業績">
                    片山研究室／山里研究室 研究業績
                  </a>
                  のページもご参照ください．
                </p>
                <div className="columns">
                  <div className="column">
                    <div className="gold-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.journal}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">論文</div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="silver-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.conference}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">国際会議</div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="bronze-circle">
                      <div>
                        <div className="is-size-1 has-text-weight-bold has-text-centered">{post.oral}</div>
                        <div className="is-size-6 has-text-weight-bold has-text-centered">口頭発表</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                
                  {data.allResearchCsv.nodes.map((node) => (
                    <CustomAccordion key={node.id} title={node.field2} author={node.field1} journal={node.field3} published={node.field5} doi={node.field6} abstract={node.field4} year={node.field7} publication_type={node.field8} />
                  ))}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );

}
