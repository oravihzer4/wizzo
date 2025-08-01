import logo from "../media/logo.png";
import creditLogo from "../media/creditLogo.png";
import rightsLogo from "../media/rights.png";
import {
  FaYoutube,
  FaTimes,
  FaWhatsapp,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" d-flex flex-column align-items-center mt-5" dir="rtl">
      <div className="mb-4" style={{ height: "120px", width: "1000px" }}>
        <div className="mediaTopFooter">
          <div className="logoBoxFoot">
            <div className="logoFoot">
              <a href="/">
                <img src={logo} alt="Logo" className="site-logo-foot" />
              </a>
            </div>
          </div>
          <div className="social-icons m-3">
            <div className="social-icon">
              <FaYoutube />
            </div>
            <div className="social-icon">
              <FaTimes />
            </div>
            <div className="social-icon">
              <FaWhatsapp />
            </div>
            <div className="social-icon">
              <FaTiktok />
            </div>
            <div className="social-icon">
              <FaFacebook />
            </div>
            <div className="social-icon">
              <FaLinkedin />
            </div>
            <div className="social-icon">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row footerLinks">
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold text-light">מרכז הנדל"ן</h6> <br />
            <div className="d-flex flex-column small">
              <a href="#" className="footer-link p-2">
                אודות מרכז הנדל"ן
              </a>
              <a href="#" className="footer-link p-2">
                צור קשר
              </a>
              <a href="#" className="footer-link p-2">
                תגיות
              </a>
              <a href="#" className="footer-link p-2">
                מפת אתר
              </a>
              <a href="#" className="footer-link p-2">
                תנאי שימוש
              </a>
              <a href="#" className="footer-link p-2">
                פסגת הנדל"ן
              </a>
              <a href="#" className="footer-link p-2">
                RSS
              </a>
              <a href="#" className="footer-link p-2">
                חדשות נדל"ן
              </a>
              <a href="#" className="footer-link p-2">
                חברות נדל"ן
              </a>
              <br />
              <strong>
                <a className="readMore" href="#">
                  קרא עוד +
                </a>
              </strong>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold text-light">מדריכים כלליים</h6> <br />
            <div className="d-flex flex-column small">
              <a href="#" className="footer-link p-2">
                בנייה ירוקה
              </a>
              <a href="#" className="footer-link p-2">
                בקשה לרישום מקרקעין
              </a>
              <a href="#" className="footer-link p-2">
                כופר חניה
              </a>
              <a href="#" className="footer-link p-2">
                הגרלות מחיר למשתכן
              </a>
              <a href="#" className="footer-link p-2">
                היתרי בניה
              </a>
              <a href="#" className="footer-link p-2">
                חיפוש עסקאות נדל"ן
              </a>
              <a href="#" className="footer-link p-2">
                תקן 21
              </a>
              <a href="#" className="footer-link p-2">
                כיצד לבחור בעסקאות נדל"ן
              </a>
              <a href="#" className="footer-link p-2">
                בניית בית פרטי
              </a>
              <br />
              <strong>
                <a className="readMore " href="#">
                  קרא עוד +
                </a>
              </strong>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold text-light">התחדשות עירונית</h6> <br />
            <div className="d-flex flex-column small">
              <a href="#" className="footer-link p-2">
                מדד ההתחדשות העירונית
              </a>
              <a href="#" className="footer-link p-2">
                חברות נדל"ן מובילות בתחום בניה
              </a>
              <a href="#" className="footer-link p-2">
                חברות נדל"ן מדורגות בתמ"א 38
              </a>
              <a href="#" className="footer-link p-2">
                עורכי דין מומחים בהתחדשות עירונית
              </a>
              <a href="#" className="footer-link p-2">
                אדריכלים מדורגים בתמ"א 38
              </a>
              <a href="#" className="footer-link p-2">
                אדריכלים מדורגים בתחום בניה
              </a>
              <a href="#" className="footer-link p-2">
                שמאים מומחים בהתחדשות עירונית
              </a>
              <a href="#" className="footer-link p-2">
                עורכי דין להתחדשות עירונית
              </a>
              <a href="#" className="footer-link p-2">
                הרשות להתחדשות עירונית
              </a>
              <br />
              <strong>
                <a className="readMore " href="#">
                  קרא עוד +
                </a>
              </strong>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold text-light">רכישה והשכרת נדל"ן</h6> <br />
            <div className="d-flex flex-column small">
              <a href="#" className="footer-link p-2">
                היכן כדאי לרכוש דירה להשקעה
              </a>
              <a href="#" className="footer-link p-2">
                מס רכישה דירה ראשונה
              </a>
              <a href="#" className="footer-link p-2">
                מס נדל"ן
              </a>
              <a href="#" className="footer-link p-2">
                ערבויות בנקאיות
              </a>
              <a href="#" className="footer-link p-2">
                אישור עקרוני למשכנתא
              </a>
              <a href="#" className="footer-link p-2">
                משכון
              </a>
              <a href="#" className="footer-link p-2">
                חוזה שכירות בלתי מוגנת
              </a>
              <a href="#" className="footer-link p-2">
                הסכם מכר
              </a>
              <a href="#" className="footer-link p-2">
                טפסים של מיסוי מקרקעין
              </a>
              <br />
              <strong>
                <a className="readMore" href="#">
                  קרא עוד +
                </a>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <div className="allrightsreserved">
        <img src={rightsLogo} alt="rights" className="rightsLogo" />
        <div>
          <a href="www.wizzo.co.il">
            <img src={creditLogo} alt="credit logo" />
          </a>
        </div>
        <div className="text-light">
          © כל הזכויות שמורות למרכז הנדל"ן ישראל - סקאלה ד.מ בע"מ Scala Group
          D.M
        </div>
      </div>
    </footer>
  );
};
export default Footer;
