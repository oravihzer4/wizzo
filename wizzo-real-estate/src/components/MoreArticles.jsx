import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
const MoreArticles = () => {
  const sideArticles = articles;
  return (
    <>
      <div className="d-md-none mb-3 text-end">
        <button
          className="btn btn-outline-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileSidebar"
          aria-expanded="false"
          aria-controls="mobileSidebar"
        >
          ☰ כתבות נצפות
        </button>
        <div className="collapse mt-2" id="mobileSidebar">
          {sideArticles.slice(0, 5).map((article, idx) => (
            <div className=" p-2 shadow-sm mb-2" key={idx}>
              <img
                src={femaleAvatar}
                alt={article.title}
                className="img-fluid mb-2"
              />
              <small className="text-muted d-block mb-1">
                🕒 {article.time} | ✍️ {article.writer}
              </small>
              <h6 className="mb-1">{article.title}</h6>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default MoreArticles;
