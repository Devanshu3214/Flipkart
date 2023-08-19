import "./Footer.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Footer () {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h2>Trend Cart</h2>
          {/* <span>Anima</span> */}
          <p></p>
          <div className="socials">
            <Link to="">
              <p>
                {}
              </p>
            </Link>
            <Link to="">
              <p>
                {}
              </p>
            </Link>
            <Link to="">
              <p>
                {}
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <p className="title">Quick Links</p>
          <div className="listItems">
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/wishlist">
              <p>Wishlist</p>
            </Link>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="title">Contact Us</p>
          <div className="contact-list">
            <div className="contact-mode">
              <div className="contact-icon">
                <FmdGoodIcon />
              </div>
              <p>PDPM IIITDM JABALPUR</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <CallIcon />
              </div>
              <p>+91 9140730664</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <p>smartsamarth77@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};
export {Footer};
