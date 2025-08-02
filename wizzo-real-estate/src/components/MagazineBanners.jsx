import articles from "../data/articlesData.js";
import femaleAvatar from "../media/femaleAvatar.jpg";
import MBlue from "../media/MBlue.png";
import MMint from "../media/MMint.png";
import MYellow from "../media/MYellow.svg";
import line2 from "../media/line2.png";
import toPageBtnYellow from "../media/toPageBtnYellow.png";
import topImg from "../media/topAdd.png";
import lightBlueGroup from "../media/lightBlueGroup.png";

const sections = [
  { title: "נדל״ן למגורים", icon: MYellow },
  { title: "התחדשות עירונית", icon: MMint },
  { title: "נדל״ן מניב", icon: MBlue },
  { title: "דעות וניתוחים", icon: MYellow },
  { title: "חדשות הענף", icon: MYellow },
  { title: "הפנים מאחורי", icon: MYellow },
  { title: "עיצוב ואדריכלות", icon: MYellow },
];

const Section = ({ title, icon, articles }) => (
  <div className="articleGrid container my-5 " dir="rtl">
    <div className="gridTitle text-center">
      <img src={icon} alt="section-icon" className="letterTitle mb-2" />
      <h4 className="mt-3">{title}</h4>
      <img src={line2} alt="divider" className="lines my-4" />
      <img src={toPageBtnYellow} alt="לכל הכתבות" className="toPageBtn mt-2" />
    </div>
    <div className="row g-4">
      {articles.slice(0, 4).map((article, idx) => (
        <div className="col-12 col-md-6 col-lg-3 mb-5" key={idx}>
          <div className="mgz-item h-100 text-end">
            <div className="position-relative">
              <img
                src={femaleAvatar}
                alt={article.title}
                className="img-fluid mb-2"
              />

              <img
                src={lightBlueGroup}
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

            <p className="mb-5">{article.description}</p>
            <small className="text-muted d-block small">
              {article.time} | {article.writer}
            </small>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MagazineBanners = () => {
  return (
    <div className="magazineContainer mt-5" dir="rtl">
      {sections.map((section, idx) => {
        const isLast = idx === sections.length - 1;
        const shouldRenderAd = (idx + 1) % 2 === 0 && !isLast;

        return (
          <div key={section.title + idx}>
            <Section
              title={section.title}
              icon={section.icon}
              articles={articles}
            />
            {shouldRenderAd && (
              <div className="mt-5 m-3 p-1 text-center">
                <img
                  src={topImg}
                  alt="פרסומת עליונה"
                  className="img-fluid m-4"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MagazineBanners;
