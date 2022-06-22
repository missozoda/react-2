const Header = () =>{
  return(
  <>
    <header className="header">
      <div className="container">
        <div className="header__inner">

          <a className="logo-link" href="./index.html">
            Logo
            {/* <img className="logo" src="./img/fylo-logo.svg" alt="Fylo logo" width="176" height="52"/> */}
          </a>

          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__item">
                <a className="navbar__link" href="#">Features</a>
              </li>

              <li className="navbar__item">
                <a className="navbar__link" href="#">Team</a>
              </li>

              <li className="navbar__item">
                <a className="navbar__link" href="#">Sign In</a>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  </>
  )
};
export default Header;