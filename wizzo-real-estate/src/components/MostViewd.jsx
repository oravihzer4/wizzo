import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
import sideAdd from "../media/sideAdd1.png";

const MostViewd = () => {
  const sideArticles = articles;

  return (
    <>
      <h5 className="fw-bold m-3">הכתבות הנצפות ביותר</h5>
      {sideArticles.slice(0, 4).map((article, idx) => (
        <div key={idx}>
          <div className="mgz-item">
            <img
              src={femaleAvatar}
              alt={article.title}
              className="img-fluid mb-2 pr-4"
            />
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
