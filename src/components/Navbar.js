import React from 'react'
import { Link } from 'gatsby'
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaSubway } from '@react-icons/all-files/fa/FaSubway'
// import logo from '../img/NUYL-logo.svg'
import logo from '../img/YLAB/YLAB-banner.webp'
import './all.sass'
// google カスタム検索用
import Search from '../components/GoogleCustomSearch'
import ClientOnly from '../components/ClientOnly'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
      className="navbar is-fixed-top is-black"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="NUYL" style={{ width: '88px' }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            aria-label="Nav button"
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start">
                  <Link className="navbar-item" to="/news/" title="News">
                    ニュース
                  </Link>
                  <Link className="navbar-item" to="/research/" title="Reseach">
                    研究
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/research/publications/"
                    title="Publications"
                  >
                    業績
                  </Link>

                      {/* <a
                        className="navbar-item"
                        href="https://www2.yamazato.nuee.nagoya-u.ac.jp/dbase/show.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Yamazato Laboratory Research Publication"
                      >
                        業績
                      </a> */}

                  <Link
                    className="navbar-item"
                    to="/research/awards/"
                    title="Awards"
                  >
                    受賞
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/research/OER/list/"
                    title="Open Educational Resources"
                  >
                    教材
                  </Link>
                </div>
                <div className="navbar-end">
                  <Link
                    className="navbar-item"
                    to="/en/"
                    title="go to English page"
                  >
                    English
                  </Link>
                  <Link className="navbar-item" to="/#team" title="Team">
                    <FaUserFriends />
                  </Link>
                  <Link className="navbar-item" to="/#contact" title="Contact">
                    <FaEnvelope />
                  </Link>
                  <Link className="navbar-item" to="/#access" title="Access">
                    <FaSubway />
                  </Link>
                  <div className="navbar-item">
                    <ClientOnly>
                      <Search />
                    </ClientOnly>
                  </div>
                </div>
              </div>
        </div>
    </nav> 
    )
  }
}

export default Navbar
