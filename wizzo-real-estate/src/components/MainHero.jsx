import topImg from "../media/topAdd.png";
import add2 from "../media/add2.png";
import mainHero from "../media/hero1.png";
import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
const MainHero = () => {
  return (
    <>
      <main className="col-md-8 bg-light p-3">
        <div className="w-100 text-center mt-1 mb-5 ">
          <img src={topImg} alt="פרסומת עליונה" className="img-fluid" />
        </div>

        <div
          className="card mb-4"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <div className="row g-0 flex-md-row-reverse">
            <div className="col-md-6">
              <img
                src={mainHero}
                alt="Main Hero"
                className="img-fluid  h-100"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-end">
              <h5 className="card-title mb-3 fw-bold">
                פרויקט המגורים הגדול של השנה יוצא לדרך
              </h5>
              <p className="card-text">
                היזם יקים 400 יח״ד חדשות במרכז העיר, בשיתוף פעולה עם העירייה.
              </p>
              <p className="card-text text-muted mt-auto">
                🕒 $ 12:45 | ✍️ מאת מערכת Wizzo News
              </p>
            </div>
          </div>
        </div>

        <h4 className="fw-bold text-center mt-5 mb-3">כתבות נוספות</h4>
        <div className="row g-4">
          {articles.slice(0, 6).map((article, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100">
                <img
                  src={femaleAvatar}
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-end">
                  <h6 className="card-title fw-bold">{article.title}</h6>
                  <p className="card-text text-muted small">
                    🕒 {article.time} | ✍️ {article.writer}
                  </p>
                  <p>{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-100 text-center mt-3 mb-3 ">
          <img src={add2} alt="פרסומת תחתונה" className="img-fluid" />
        </div>
      </main>
    </>
  );
};
export default MainHero;
