import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
import sideAdd from "../media/sideAdd1.png";
import orangeGroup from "../media/orangeGroup.png";

const MostViewd = () => {
  const sideArticles = articles;

  return (
    <>
      <h5 className="fw-bold mostViewed">הכתבות הנצפות ביותר</h5>
      {sideArticles.slice(0, 4).map((article, idx) => (
        <div key={idx}>
          <div className="mgz-item text-end">
            <div className="position-relative">
              <img
                src={femaleAvatar}
                alt={article.title}
                className="img-fluid mb-2"
              />
              <img
                src={orangeGroup}
                alt="תגית"
                className="position-absolute"
                style={{
                  bottom: "8px",
                  right: "0",
                  width: "117px",
                  height: "24px",
                }}
              />
            </div>
            <p className="px-1">{article.description}</p>
            <small className="text-muted d-block mb-1">
              {article.time} | {article.writer}
            </small>
          </div>

          {idx === 1 && (
            <div className="my-3">
              <img
                src={sideAdd}
                alt="side ad"
                className="img-fluid p-2"
                style={{ backgroundColor: "white" }}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MostViewd;
