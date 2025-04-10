import * as React from 'react'
// import PageTop from "../components/PageTop";
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SeO from '../components/seo'
import Layout from '../components/Layout'
import IndexRoll from '../components/indexRoll'
import IndexTopRoll from '../components/IndexTopRoll'
import { StaticImage } from 'gatsby-plugin-image'
import { FaUserTie } from '@react-icons/all-files/fa/FaUserTie'
import { FaUserGraduate } from '@react-icons/all-files/fa/FaUserGraduate'
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaSubway } from '@react-icons/all-files/fa/FaSubway'
import { SiGooglemaps } from '@react-icons/all-files/si/SiGooglemaps'

const width = 300

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
    />
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('/img/home-jumbotron.jpg')`,
        // backgroundImage: {data.markdownRemark.image},
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0#002c76",
          backgroundColor: "#002c76",
          color: "white",
          padding: "1rem",
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h2>
    </div> */}
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <StaticImage
            src="../img/logo-j.png"
            width={width}
            alt="Nagoya University Yamazato Laboratory"
            placeholder="blurred"
          />
          {/* <h2 className="subtitle">名古屋大学山里研究室</h2> */}
        </div>
      </div>
    </div>
    <section className="blog-posts">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <br />
            <IndexTopRoll />
            <div className="tile box">
              <blockquote>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
              </blockquote>
            </div>

            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-7">
                    <div className="column is-12 post-img">
                      <StaticImage
                        src="../img/ITS-VLC.webp"
                        alt="ITS-VLC"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                  <div className="column post is-5">
                    <div className="column is-12 featured-content">
                      <h1 className="heading post-category">Research</h1>
                      <h2 className="is-size-3">可視光通信</h2>
                      <div className="content px-2">
                        可視光通信とはLEDを人の目には見えないほど高速に点滅することでデータ伝送を行う通信方式です．
                        私たちは，受信機にカメラを使うイメージセンサ通信について研究しています．
                      </div>
                      <Link
                        className="button"
                        to="/research/Visible-light-communications/"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            {/* <PageTop /> */}
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-5">
                    <div className="column is-12 featured-content">
                      <h1 className="heading post-category">Research</h1>
                      <h1 className="is-size-3">確率共鳴現象の通信への応用</h1>
                      <div className="content px-2">
                        確率共鳴とは、システムへの入力雑音の増大と共にそのシステムの応答が向上する現象のことです．私たちは，確率共鳴現象の通信への応用について研究しています．
                      </div>
                      <Link
                        className="button"
                        to="/research/Stochastic-resonance/"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="column post is-7">
                    <div className="column is-12 post-img">
                      <StaticImage
                        src="../img/SR.webp"
                        alt="Stochastic Resonance"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
            {/* <PageTop /> */}
            <hr />
            <div className="columns featured-post is-multiline">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column post is-7">
                    <div className="column is-12 post-img">
                      <StaticImage
                        src="../img/Global_Open_Educational_Resources_Logo.svg"
                        alt="Open Educational Resources Logo"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                  <div className="column post is-5">
                    <div className="column is-12 featured-content">
                      <h1 className="heading post-category">Research</h1>
                      <h1 className="is-size-3">オープン教材</h1>
                      <div className="content px-2">
                        オープン教材とは，教育・学習目的でインターネット上に無償で公開されたテキスト，画像，ビデオなどのデジタル・コンテンツ（教材）を指し，誰でも自由に利用できるだけで無く，改変や再利用の二次利用もできる教材のことを言います．
                        私たちは、オープン教材について研究しています。とりわけ、名古屋大学において教材の無償公開を行っているサイト「
                        <a
                          href="https://ocw.nagoya-u.jp/"
                          title="Nagoya University OpenCourseWare (NUOCW)"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          名大の授業
                        </a>
                        」の管理・運用に係わっています。
                      </div>
                      <Link className="btn" to="/research/OER/">
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            {/* <PageTop /> */}
            <hr />
            <h2 id="news">&nbsp;ニュース</h2>
            <div className="columns is-multiline">
              <div className="column post is-12">
                <IndexRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/news">
                    Read more "News and Updates" →
                  </Link>
                </div>
              </div>
            </div>
            {/* <PageTop /> */}
            <hr />
            <h1 id="team">
              <Link to="/team/">&nbsp;チーム</Link>
            </h1>
            <p className="is-size-5">岡田啓先生は2025年4月1日付けで<a
                          href="https://www.meijo-u.ac.jp/academics/sci_tech/electrical/educator.html"
                          title="名城大学理工学部電気電子工学科"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          名城大学理工学部電気電子工学科
                        </a>の教授に就任されました．</p>
            <div className="columns is-multiline">
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">スタッフ</h1>
                    <h1>
                      <FaUserTie />
                    </h1>
                    <p className="is-size-5">
                      教授 <br />
                      &nbsp; &nbsp;
                      <Link to="/team/Takaya-Yamazato/">山里敬也</Link>
                      <br />
                      <br />
                      講師 <br />
                      &nbsp; &nbsp;
                      <Link to="/team/Shan-Lu/">路 姍</Link>
                      <br />
                      <br />
                      秘書 <br />
                      &nbsp; &nbsp;石川 愛子
                      <br />
                      &nbsp; &nbsp;白石 栄里子
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">
                      博士後期課程
                    </h1>
                    <h1>
                      <FaUserGraduate />
                    </h1>
                    <p className="is-size-5">
                      D3 <br />
                      &nbsp; &nbsp;伊与田 友貴
                      <br />
                      <br />
                      D1 <br />
                      &nbsp; &nbsp;石田 匠
                      <br />
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">博士前期課程</h1>
                    <h1>
                      <FaUserGraduate />
                    </h1>
                    <p className="is-size-5">
                      M2 <br />
                      &nbsp; &nbsp;赤井 壮太郎
                      <br />
                      &nbsp; &nbsp;浅岡 新
                      <br />
                      &nbsp; &nbsp;石 天昊<br />
                      &nbsp; &nbsp;(SHI Tianhao)
                      <br />
                      &nbsp; &nbsp;大河 知恵里
                      <br />
                      &nbsp; &nbsp;大脇 孝明
                      <br />
                      &nbsp; &nbsp;近藤 涼太
                      <br />
                      &nbsp; &nbsp;中野 幸亮
                      <br />
                      <br />
                      M1 <br />
                      &nbsp; &nbsp;浅野 智晴
                      <br />
                      &nbsp; &nbsp;阿邊 瑛佑 
                      <br />
                      &nbsp; &nbsp;酒井 優
                      <br />
                      &nbsp; &nbsp;小林 正尚
                      <br />
                      &nbsp; &nbsp;曽我 亮太
                      <br />
                      &nbsp; &nbsp;藤澤 萌夢
                      <br />
                      &nbsp; &nbsp;楊 皓冉
                      <br />
                      &nbsp; &nbsp;(YANG Haoran)
                      <br />
                      &nbsp; &nbsp;陸 啓明
                      <br />
                      &nbsp; &nbsp;(LIU Qi Ming)
                      <br />                    
                    </p>
                  </div>
                </article>
              </div>
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <h1 className="heading post-category">学部</h1>
                    <h1>
                      <FaUserFriends />
                    </h1>
                    <p className="is-size-5">
                      B4 <br />
                      &nbsp; &nbsp;久保 綾也
                      <br />
                      &nbsp; &nbsp;佐藤 心哉
                      <br />
                      &nbsp; &nbsp;澤田 蒼生
                      <br />
                      &nbsp; &nbsp;柴山 裕翔
                      <br />
                      &nbsp; &nbsp;冨安 将生
                      <br />
                      <br />
                      研究生<br />
                      &nbsp; &nbsp;劉 訳沢
                      <br />
                      &nbsp; &nbsp;(LIU Yize)
                      <br />
                      &nbsp; &nbsp;孙 瑜
                      <br />
                      &nbsp; &nbsp;(SUN Yu)
                      <br />
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <h2 id="team">
              <Link to="/team/">&nbsp;Alumni</Link>
            </h2>
            <div className="columns is-multiline">
              <div className="column post is-3">
                <article className="columns is-multiline">
                  <div className="column is-12 featured-content ">
                    <p>
                      <ul>
                      <li>
                          &nbsp; &nbsp;<Link to="/team/2024/">2024</Link>
                        </li>
                        <li>
                          &nbsp; &nbsp;<Link to="/team/2023/">2023</Link>
                        </li>
                        <li>
                          &nbsp; &nbsp;<Link to="/team/2022/">2022</Link>
                        </li>
                        <li>
                          &nbsp; &nbsp;<Link to="/team/2021/">2021</Link>
                        </li>
                      </ul>
                    </p>
                  </div>
                </article>
              </div>
            </div>
            {/* <PageTop /> */}
            <hr />
            <div className="column post is-12">
              <h1 id="contact">お問い合わせ</h1>
              <p className="is-size-5">
                山里研究室へお問い合わせは以下のフォームからお願いします．
                <br />
                <br />
                <Link
                  className="button has-text-weight-bold is-size-4"
                  to="/inquiry"
                >
                  お問い合わせフォーム
                </Link>
              </p>
              <br />
              <h2>
                <FaEnvelope />
                &nbsp; &nbsp;住所
              </h2>
              <p className="is-size-5">
                〒464-8603 名古屋市千種区不老町1
                <br />
                名古屋大学大学院工学研究科 情報・通信工学専攻 山里研究室
                <br />
                研究室（学生）：IB電子情報館5F&nbsp; &nbsp;
                <FaPhoneAlt />
                &nbsp; &nbsp;052-789-3173
                <br />
                秘書：IB電子情報館9F片山研&nbsp; &nbsp;
                <FaPhoneAlt />
                &nbsp; &nbsp;052-789-2743
                <br />
              </p>
              <br />
              <h2 id="access">アクセス</h2>
              <p className="is-size-5">
                山里研究室は IB電子情報館 9Fにあります．
                <br />
                <a href="https://www.nagoya-u.ac.jp/extra/map/index.html">
                  キャンパスマップ
                </a>{' '}
                のC3-1になります．
              </p>
              <br />
              <h3 className="is-size-4">
                <FaSubway /> 名古屋駅から
              </h3>
              <p className="is-size-5">
                名古屋駅より地下鉄東山線(藤が丘方面行き)乗車，本山駅下車
                <br />
                地下鉄名城線(右回り,八事方面行き)乗り換え,名古屋大学駅下車
              </p>
              <br />
              <h3 className="is-size-4">
                <FaSubway />
                &nbsp;名大HPの
                <a href="https://www.nagoya-u.ac.jp/contact/directions.html">
                  アクセスマップ
                </a>
                もご参照ください．
              </h3>
              <br />
              <h3 className="is-size-4">
                <SiGooglemaps />
                &nbsp;
                <a href="https://www.google.co.jp/maps/place/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6+IB%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E9%A4%A8+%E5%8C%97%E6%A3%9F/@35.155147,136.9647537,18z/data=!4m5!3m4!1s0x60037b3dbaffafc5:0x4b259fac77fcc377!8m2!3d35.1553519!4d136.9660213?hl=ja">
                  Google map
                </a>{' '}
                もご参照下さい．
              </h3>

              {/* <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.067613051525!2d136.963807252052!3d35.154934480223524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037abb489f342d%3A0x77c72171e4e956e8!2z5ZCN5Y-k5bGL5aSn5a2m5bel5a2m6YOo44O75aSn5a2m6Zmi5bel5a2m56CU56m256eR!5e0!3m2!1sja!2sjp!4v1634217089125!5m2!1sja!2sjp&amp;language=ja"
                width="600"
                height="450"
                // style="border:0;"
                title="Google Map"
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}
            </div>
            {/* <PageTop /> */}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPageTemplate

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" }, lang: { eq: "ja" } }
    ) {
      id
      frontmatter {
        templateKey
        lang
        title
        heading
        description
      }
      html
    }
  }
`
