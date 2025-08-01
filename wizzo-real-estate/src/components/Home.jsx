import articles from "../data/articlesData.js";
import Footer from "./Footer.jsx";
import MagazineBanners from "./MagazineBanners.jsx";
import MainHero from "./MainHero.jsx";
import MostViewd from "./MostViewd.jsx";

const Home = () => {
  const sideArticles = articles;

  return (
    <>
      <div className="container">
        <div
          className="row flex-column flex-md-row-reverse align-items-center align-items-md-start"
          dir="ltr"
        >
          <MainHero />
          <aside className="col-md-3 mb-4 mb-md-0 d-none d-md-flex flex-column gap-3 align-items-center text-center">
            <MostViewd />
          </aside>
          <MagazineBanners />
        </div>
      </div>
      <div style={{ height: "250px" }}></div>
      <Footer />
    </>
  );
};

export default Home;
