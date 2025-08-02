import mainLogo from "../media/mainLogo.png";
import {
  FaYoutube,
  FaTimes,
  FaWhatsapp,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row-reverse justify-content-between align-items-center">
        <div className="logoBox">
          <div className="logo">
            <img src={mainLogo} alt="Logo" className="site-logo" />
          </div>
        </div>
        <nav className="mainNav d-flex flex-column " dir="rtl">
          <div className="topNav  d-flex justify-content-between align-items-center ">
            <div className="links d-flex flex-wrap ">
              <a href="#">נדל״ן למגורים</a> <a href="#">התחדשות עירונית</a>
              <a href="#">נדל״ן מניב / השקעות</a> <a href="#">דעות וניתוחים</a>
              <a href="#">חדשות הענף</a> <a href="#">עיצוב ואדריכלות</a>
              <a href="#nadlan">נדל״ן TV</a> <a href="#podcasts">פודקאסטים</a>
            </div>
            <div className="social-icons d-flex gap-2">
              <div className="social-icon">
                <FaInstagram />
              </div>
              <div className="social-icon">
                <FaLinkedin />
              </div>
              <div className="social-icon">
                <FaFacebook />
              </div>
              <div className="social-icon">
                <FaTiktok />
              </div>
              <div className="social-icon">
                <FaWhatsapp />
              </div>
              <div className="social-icon">
                <FaTimes />
              </div>
              <div className="social-icon">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="bottomNav d-flex justify-content-between align-items-center ">
            <div className="links d-flex flex-wrap">
              <a href="#">מדד התחדשות עירונית</a> <a href="#">מחשבונים</a>
              <a href="#">נדל״ן בראש צעיר</a> <a href="#">אודות מרכז הנדל</a>
              <a href="#">מכללת מרכז הנדל״ן</a> <a href="#footer">צור קשר</a>
            </div>
            <input type="text" id="searchBar" placeholder="חיפוש" />
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
