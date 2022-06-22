const Footer = () =>{
  return(
    <>
        <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <a className="logo-link" href="./index.html">
            {/* <img className="logo" src="./img/fylo-logo.svg" alt="Fylo logo" width="176" height="52"/> */}
          </a>

          <div className="footer__content">

            <p className="footer__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <a className="footer__contact-link" href="tel:+1-543-123-4567">+1-543-123-4567
                </a>
              </li>
              <li className="footer__contact-item">
                <a className="footer__contact-link" href="mailto:example@fylo.com">
                  example@fylo.com
                </a>
              </li>
            </ul>
            
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">About Us</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Jobs</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Press</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Blog</a>
              </li>
            </ul>
            
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Contact Us</a>
              </li>
              <li className="footer__nav-item">
                <a className="footer__nav-link" href="#">Terms</a>
              </li>
              <li className="footer__nav-item">
              <a className="footer__nav-link" href="#">Privacy</a>
            </li>
          </ul>

          {/* <ul class="footer__socials-list">
            <li class="footer__socials-item">
              <a class="footer__socials-link" href="https://www.facebook.com">
                <img class="footer__socials-img" src="./img/facebook.svg" alt="facebook" width="33" height="31">
              </a>
            </li>
            <li class="footer__socials-item">
              <a class="footer__socials-link" href="https://www.twitter.com">
                <img class="footer__socials-img" src="./img/twitter.svg" alt="twitter" width="33" height="31">
            </a>
          </li>
            <li class="footer__socials-item">
              <a class="footer__socials-link" href="https://www.instagram.com">
                <img class="footer__socials-img" src="./img/instagram.svg" alt="instagram" width="33" height="31">
              </a>
            </li>
          </ul> */}

          </div>

        </div>
      </div>
    </footer>
    </>
  )
} ;
export default Footer;