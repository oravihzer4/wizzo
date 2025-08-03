import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
import redGroup from "../media/redGroup.png";
import add2 from "../media/add2.png";

const MoreArticles = () => {
  const sideArticles = articles;

  return (
    <div className="container text-center my-5" dir="rtl">
      <h4 className="fw-bold mb-4">כתבות נוספות</h4>
      <div className="row g-4">
        {sideArticles.slice(0, 6).map((article, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="bg-white h-100 text-end p-1">
              <div className="position-relative">
                <img
                  src={femaleAvatar}
                  className="img-fluid"
                  alt={article.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <img src={redGroup} alt="תגית" className="redTag" />
              </div>
              <p className="mb-2">{article.description}</p>
              <small className="text-muted">
                {article.time} | {article.writer}
              </small>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <img src={add2} alt="bottomAdd" className="w-75" />
      </div>
    </div>
  );
};

export default MoreArticles;
