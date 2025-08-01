import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";

const MostViewd = () => {
  const sideArticles = articles;
  return (
    <>
      <h5 className="fw-bold m-3">הכתבות הנצפות ביותר</h5>
      {sideArticles.slice(0, 5).map((article, idx) => (
        <div className="card p-2 w-100" key={idx}>
          <img
            src={femaleAvatar}
            alt={article.title}
            className="img-fluid  mb-2 pr-4 "
          />
          <small className="text-muted d-block mb-1">
            🕒 {article.time} | ✍️ {article.writer}
          </small>
          <h6 className="mb-1">{article.title}</h6>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
};
export default MostViewd;
