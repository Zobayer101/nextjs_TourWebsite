import "../Design/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
      <div>
        <div className="footerCoun">
          <div className="newLetter">
            <div className="txt">
              <p className="bigtext">News Letter</p>
              <p className="saltext">
                Subscribe to your <br/>email For weekly updates
              </p>
            </div>
            <div className="input">
              <input type="email" />
              <button type="submit">submit</button>
            </div>
          </div>
          <div className="section">
            <div className="firstSection">
              <div className="quikLink">
                <p className="para">Quik Link</p>
                <p>About us</p>
                <p>Terms & Conditio</p>
                <p>Privacy Polyicy</p>
                <p> Help</p>
                <p>Tour</p>
              </div>
              <div className="support">
                <p className="para">Support</p>
                <p>Our Location </p>
                <p>The Hosts</p>
                <p>About</p>
                <p>Contact</p>
                <p>News</p>
              </div>
            </div>

            <div className="scoundSection">
              <div className="ContacaInfo">
                <p className="para">Contac Info</p>
                <p>98 west 21th street</p>
                <p>New work</p>
              </div>
              <div className="Connect">
                <p className="para">Connect</p>
                <i className="icons">
                  <FaFacebook />
                </i>
                <i className="insta">
                  <FaInstagramSquare />
                </i>
                <i className="tewitter">
                  <FaXTwitter />
                </i>
                <i className="youtube">
                  <FaYoutube />
                </i>
              </div>
            </div>
          </div>
          <div className="finesh">
            <p>Copyright © 2024 Allrights reserved rainodigital.com</p>
          </div>
        </div>
      </div>
    );
}

export default Footer;
