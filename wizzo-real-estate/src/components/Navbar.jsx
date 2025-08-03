import { useState } from "react";
import mainLogo from "../media/mainLogo.png";
import mobileLogo from "../media/mobileLogo1.png";
import mobileHamburger from "../media/mobileHamburger.png";
import {
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container-fluid p-0">
      <div className={`d-none d-md-block ${isMobileMenuOpen ? "d-none" : ""}`}>
        <div className="d-flex flex-row-reverse justify-content-between align-items-center">
          <div className="logoBox">
            <div className="logo">
              <a href="/">
                <img src={mainLogo} alt="Logo" className="site-logo" />
              </a>
            </div>
          </div>
          <nav className="mainNav d-flex flex-column" dir="rtl">
            <div className="topNav d-flex justify-content-between align-items-center">
              <div className="links d-flex flex-wrap">
                <a href="#">נדל״ן למגורים</a>
                <a href="#">התחדשות עירונית</a>
                <a href="#">נדל״ן מניב / השקעות</a>
                <a href="#">דעות וניתוחים</a>
                <a href="#">חדשות הענף</a>
                <a href="#">עיצוב ואדריכלות</a>
                <a href="#nadlan">נדל״ן TV</a>
                <a href="#podcasts">פודקאסטים</a>
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
            <div className="bottomNav d-flex justify-content-between align-items-center">
              <div className="links d-flex flex-wrap">
                <a href="#">מדד התחדשות עירונית</a>
                <a href="#">מחשבונים</a>
                <a href="#">נדל״ן בראש צעיר</a>
                <a href="#">אודות מרכז הנדל</a>
                <a href="#">מכללת מרכז הנדל״ן</a>
                <a href="#footer">צור קשר</a>
              </div>
              <input type="text" id="searchBar" placeholder="חיפוש" />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        dir="rtl"
        className="d-block d-md-none w-100"
        style={{ backgroundColor: "#5806c7", color: "white" }}
      >
        <div className="d-flex justify-content-between align-items-center p-2">
          <a href="/">
            <img
              src={mobileLogo}
              className="m-1"
              alt="Logo"
              style={{ height: "60px" }}
            />
          </a>
          <button
            className=" toggleHamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            style={{ border: "none", background: "transparent" }}
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <img
                src={mobileHamburger}
                alt="Menu"
                style={{ height: "24px", width: "24px" }}
              />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="px-3 pb-3">
            <a href="#" className="d-block py-1 text-white">
              נדל״ן למגורים
            </a>
            <a href="#" className="d-block py-1 text-white">
              התחדשות עירונית
            </a>
            <a href="#" className="d-block py-1 text-white">
              נדל״ן מניב / השקעות
            </a>
            <a href="#" className="d-block py-1 text-white">
              דעות וניתוחים
            </a>
            <a href="#" className="d-block py-1 text-white">
              חדשות הענף
            </a>
            <a href="#" className="d-block py-1 text-white">
              עיצוב ואדריכלות
            </a>
            <a href="#nadlan" className="d-block py-1 text-white">
              נדל״ן TV
            </a>
            <a href="#podcasts" className="d-block py-1 text-white">
              פודקאסטים
            </a>
            <hr className="bg-white" />
            <a href="#" className="d-block py-1 text-white">
              מדד התחדשות עירונית
            </a>
            <a href="#" className="d-block py-1 text-white">
              מחשבונים
            </a>
            <a href="#" className="d-block py-1 text-white">
              נדל״ן בראש צעיר
            </a>
            <a href="#" className="d-block py-1 text-white">
              אודות מרכז הנדל
            </a>
            <a href="#" className="d-block py-1 text-white">
              מכללת מרכז הנדל״ן
            </a>
            <a href="#footer" className="d-block py-1 text-white">
              צור קשר
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
