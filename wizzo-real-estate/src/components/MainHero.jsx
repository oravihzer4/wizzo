import topImg from "../media/topAdd.png";
import add2 from "../media/add2.png";
import mainHero from "../media/hero1.png";
import lightGreenTag from "../media/lightGreenTag.png";
import MoreArticles from "./MoreArticles.jsx";
const MainHero = () => {
  return (
    <>
      <main className="col-md-8 mt-5 border-start text-dark border-2 mx-auto">
        <div className="w-100 text-center mt-5 mb-5 ">
          <img src={topImg} alt="פרסומת עליונה" className="img-fluid" />
        </div>

        <div className="mainHero mb-4">
          <div className="row g-0 flex-md-row-reverse ">
            <div className="col-md-6 position-relative">
              <img src={mainHero} alt="Main Hero" className="img-fluid" />
              <img
                src={lightGreenTag}
                alt="Green Tag"
                className="position-absolute bottom-0 end-0"
              />
            </div>

            <div className="col-md-6 d-flex flex-column p-4 text-end ">
              <small>11:06 | דורון ברויטמן</small>
              <h3 className="mb-4 fw-bold ">
                אושרה תוכנית העיצוב של צמח המרמן ואזורים למגדל יוקרה במתחם דפנה
              </h3>
              <p>
                כשנתיים לאחר הזכייה במכרז דיירים, אושרה תוכנית העיצוב האדריכלי
                לפרויקט פינוי-בינוי במסגרתו ייהרסו במרכז ת"א 66 דירות וייבנה
                מגדל בן 25 קומות
              </p>
            </div>
          </div>
        </div>

        <MoreArticles />

        <div className="mt-5">
          <img src={add2} alt="פרסומת תחתונה" className="w-100 mt-5" />
        </div>
      </main>
    </>
  );
};
export default MainHero;
