import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
import MBlue from "../media/MBlue.png";
import MMint from "../media/MMint.png";
import MYellow from "../media/MYellow.svg";
import line2 from "../media/line2.png";
import toPageBtnYellow from "../media/toPageBtnYellow.png";
import topImg from "../media/topAdd.png";

const MagazineBanners = () => {
  const sideArticles = articles;
  return (
    <>
      <div className="magazineContainer mt-3" dir="rtl">
        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MYellow} alt="m-yellow" className="letterTitle mb-2 " />
            <h3 className="fw-bold ">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MMint} alt="m-yellow" className="letterTitle mb-2" />
            <h3 className="fw-bold">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-100 text-center m-5 ">
          <img src={topImg} alt="פרסומת עליונה" className="img-fluid" />
        </div>
        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MBlue} alt="m-yellow" className="letterTitle mb-2" />
            <h3 className="fw-bold">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MYellow} alt="m-yellow" className="letterTitle mb-2" />
            <h3 className="fw-bold">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-100 text-center m-5 ">
          <img src={topImg} alt="פרסומת עליונה" className="img-fluid" />
        </div>
        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MYellow} alt="m-yellow" className="letterTitle mb-2" />
            <h3 className="fw-bold">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MYellow} alt="m-yellow" className="letterTitle mb-2" />
            <h3 className="fw-bold">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-100 text-center m-5 ">
          <img src={topImg} alt="פרסומת עליונה" className="img-fluid" />
        </div>
        <section className="articleGrid container my-5" dir="rtl">
          <div className="gridTitle text-center mb-4">
            <img src={MYellow} alt="m-yellow" className="letterTitle mb-2" />
            <h3 className="fw-bold">נדל״ן למגורים</h3>
            <img src={line2} alt="divider" className="lines my-4" />
            <img
              src={toPageBtnYellow}
              alt="לכל הכתבות"
              className="toPageBtn mt-2"
            />
          </div>
          <div className="row g-4">
            {sideArticles.slice(0, 4).map((article, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="mgz-item  h-100 shadow-sm p-3 text-end">
                  <img
                    src={femaleAvatar}
                    alt={article.title}
                    className="img-fluid mb-2"
                  />
                  <small className="text-muted d-block mb-2">
                    🕒 {article.time} | ✍️ {article.writer}
                  </small>
                  <h6 className="fw-bold mb-1">{article.title}</h6>
                  <p className="mb-0">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default MagazineBanners;
