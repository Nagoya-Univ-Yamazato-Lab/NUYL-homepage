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

const NavbarEn = class extends React.Component {
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
                  <Link className="navbar-item" to="/en/news/">
                    News
                  </Link>
                  <Link className="navbar-item" to="/en/research/">
                    Research
                  </Link>
                  {/* <Link className="navbar-item" to="/en/publications/">
                    Publications
                  </Link> */}
                                        <a
                        className="navbar-item"
                        href="https://www2.yamazato.nuee.nagoya-u.ac.jp/dbase/show-e.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Yamazato Laboratory Research Publication"
                      >
                        Publications
                      </a>
                  <Link className="navbar-item" to="/en/Prospective-students/">
                    Prospective students
                  </Link>
                </div>
                <div className="navbar-end">
                  <Link
                    className="navbar-item"
                    to="/"
                    title="go to Japanese page"
                  >
                    Japanese
                  </Link>
                  <Link className="navbar-item" to="/en/#team" title="Team">
                    <FaUserFriends />
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/en/#contact"
                    title="Contact"
                  >
                    <FaEnvelope />
                  </Link>
                  <Link className="navbar-item" to="/en/#access" title="Access">
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

export default NavbarEn
