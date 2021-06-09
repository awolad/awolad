import './css/desktop.css'

function DesktopHeader() {
  return (
    <>
      <header className="desktop-header-1 d-flex align-items-start flex-column">
        <div className="site-logo">
          <a href="/">
            <img src="/assets/images/awolad/with-bike.jpeg" alt="Bolby" className="mb-4" />
          </a>
        </div>
        <nav>
          <ul className="vertical-menu scrollspy">
            <li className="active"><a href="#home"><i className="icon-home"></i>Home</a></li>
            <li><a href="#about"><i className="icon-user-following"></i>About</a></li>
            <li><a href="#services"><i className="icon-briefcase"></i>Services</a></li>
            <li><a href="#experience"><i className="icon-graduation"></i>Experience</a></li>
            {/* <li><a href="#works"><i className="icon-layers"></i>Works</a></li> */}
            {/* <li><a href="#blog"><i className="icon-note"></i>Blog</a></li> */}
            <li><a href="#contact"><i className="icon-bubbles"></i>Contact</a></li>
          </ul>
        </nav>
        <div className="footer">
          <span className="copyright">© {new Date().getFullYear()} Awolad Hossain.</span>
        </div>
      </header>
    </>
  )
}

export default DesktopHeader
