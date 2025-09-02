import React from 'react'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaSubway } from '@react-icons/all-files/fa/FaSubway'
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { FaVimeoV } from '@react-icons/all-files/fa/FaVimeoV'
import { FaFlagUsa } from '@react-icons/all-files/fa/FaFlagUsa'
import { FaAward } from '@react-icons/all-files/fa/FaAward'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { GiArchiveResearch } from '@react-icons/all-files/gi/GiArchiveResearch'
import { GoCircuitBoard } from '@react-icons/all-files/go/GoCircuitBoard'
import { MdAnnouncement } from '@react-icons/all-files/md/MdAnnouncement'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import logo from "../img/og-image.jpg";
// import logo from '../img/logo.png'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
// import youtube from '../img/social/youtube.svg'
// import github from "../img/github-icon.svg";

const width = 300

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/">
            <StaticImage
              // src="../img/logo.png"
              src="../img/YLAB/YLAB.webp"
              width={width}
              alt="Yamazato Laboratory"
              placeholder="blurred"
            />
          </Link>
          <br />
          <br />
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link
                        to="/"
                        className="navbar-item"
                        title="go to Japanese page"
                      >
                        <FaHome />
                        &nbsp;&nbsp;ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/news/" title="News">
                        <MdAnnouncement />
                        &nbsp;&nbsp;ニュース
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/research/"
                        title="Reseach"
                      >
                        <GoCircuitBoard />
                        &nbsp;&nbsp;研究
                      </Link>
                    </li>
                    <li>
                      {/* <Link
                        className="navbar-item"
                        to="/research/publications/"
                        title="Publications"
                      >
                        <GiArchiveResearch />
                        &nbsp;&nbsp;業績
                      </Link> */}
                       <a
                        className="navbar-item"
                        href="https://www2.yamazato.nuee.nagoya-u.ac.jp/dbase/show.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Yamazato Laboratory Research Publication"
                      >
                        <GiArchiveResearch />
                        &nbsp;&nbsp;業績
                      </a>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/awards/"
                        title="Awards"
                      >
                        <FaAward />
                        &nbsp;&nbsp;表彰
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/en/"
                        title="go to English page"
                      >
                        <FaFlagUsa />
                        &nbsp;&nbsp;English
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/#contact"
                        title="お問い合わせ"
                      >
                        <FaEnvelope />
                        &nbsp;&nbsp;お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.nagoya-u.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Nagoya University"
                      >
                        東海国立大学機構 名古屋大学
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.ilas.nagoya-u.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Institute of Liberal Arts and Sciences, Nagoya University"
                      >
                        名古屋大学 教養教育院
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.nuee.nagoya-u.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Department of Information and Communication Engineering, Graduate School of Engineering, Nagoya University"
                      >
                        名古屋大学大学院 工学研究科 情報・通信工学専攻
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://wwwms.meijo-u.ac.jp/hiraku/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Meijo University Okada Laboratory"
                      >
                        名城大学 理工学部 電気電子工学科 岡田研究室
                      </a>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/TEFS2024/"
                        title="TEFS2024"
                      >
                        テクノフロンティアセミナー（TEFS2024）
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://www.ieice.org/cs/aa-its/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="IEICE AA-ITS 特別研専"
                      >
                        IEICE AA-ITS 特別研専
                      </a>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/IEEE-ComSoc-Tokyo-Joint-Chapter/"
                        title="IEEE ComSoc Tokyo Joint Chapter"
                      >
                        IEEE ComSoc Tokyo Joint Chapter
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/owc2025/"
                        title="OWC’25"
                      >
                        2nd IEEE VTC Workshop on Optical Wireless Communications
                        (OWC’25) for 6G
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="navbar-item">
                  <Link to="/en/" title="go to English page">
                    <FaFlagUsa />
                    {/* <RiEnglishInput /> */}
                  </Link>
                  <Link to="/news/" title="News">
                    {/* <FaRegNewspaper /> */}
                    <MdAnnouncement />
                  </Link>
                  <Link to="/research/" title="Research">
                    <GoCircuitBoard />
                  </Link>
                  {/* <Link to="/research/publications/" title="Publications">
                    <GiArchiveResearch />
                  </Link> */}
                  <a
                        className="navbar-item"
                        href="https://www2.yamazato.nuee.nagoya-u.ac.jp/dbase/show.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Yamazato Laboratory Research Publication"
                      >
                        <GiArchiveResearch />
                      </a>
                  <Link to="/awards/" title="Awards">
                    <FaAward />
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/team/" title="Team">
                    <FaUserFriends />
                  </Link>
                  <Link to="/#contact" title="Contact">
                    <FaEnvelope />
                  </Link>
                  <Link to="/#access" title="Access">
                    <FaSubway />
                  </Link>
                  <a
                    className="navbar-item"
                    href="https://vimeo.com/user96502067"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Vimeo: Takaya Yamazato"
                    aria-label="Vimeo: Takaya Yamazato"
                  >
                    <FaVimeoV />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
