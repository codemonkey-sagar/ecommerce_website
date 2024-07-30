import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__background'>
        <div className='footer__container'>
          <div className='footer__nav'>
            <div className='footer__navbar'>
              <h4>Krishna Marbles</h4>
              <p>
                Krishna Marble is one of the renowned <b>marble house</b> in
                Nepal, located in Airport Rd, Tinkune, Kathmandu.
              </p>
            </div>

            <div className='footer__navbar'>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Projects</a>
                </li>
                <li>
                  <a href='#'>Marbles</a>
                </li>
                <li>
                  <a href='#'>Tiles</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </div>

            <div className='footer__navbar'>
              <h4>What Are We?</h4>
              <p>Construction materials supplier Wholesaler & Retailer</p>
              <p className='button'>Contact Now</p>
            </div>

            <div className='footer__navbar'>
              <h4>Contact Us</h4>
              <div className='contact'>
                <a href='tel:+'>01 - 4112224</a>
                <a href='mailto:krishnamarbles@hotmail.com'>
                  krishnamarbles@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>
          Copyright Krishna Marble &copy;{currentYear}. All right reserved.
          Design and Develop by
          <a href='https://www.linkedin.com/in/codeemonkey/' target='_blank'>
            Code_Monkey
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
