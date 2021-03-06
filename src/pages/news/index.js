import * as React from 'react'
// import { graphql } from "gatsby"
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            // backgroundImage: `url('../../img/ob-image.jpg')`,
            backgroundImage: `url('../img/home-jumbotron.jpg')`, // これはダメ
            // backgroundImage: {data.markdownRemark.image},
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3"
            style={{
              boxShadow: '0.5rem 0 0 #5e0303, -0.5rem 0 0 #5e0303',
              backgroundColor: '#5e0303',
              color: 'white',
              padding: '1rem',
            }}
          >
            News and Updates
          </h1>
        </div>

        <div className="container">
          <div className="content">
            <section className="section">
              <BlogRoll />
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}
