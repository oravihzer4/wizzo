import podcastsArr from "../data/podcastsData";
import Mpodcast from "../media/Mpodcast.png";
import podcastBtn from "../media/tvBtn.png";
import blackLine from "../media/blackLine.png";
import playBtn from "../media/playBtn.png";
import podBtn from "../media/podBtn.png";

const Podcasts = () => {
  const podcasts = podcastsArr.slice(0, 4);

  return (
    <>
      <div id="podcasts" style={{ height: "130px" }}></div>
      <div className="podcasts container my-5" dir="rtl">
        <div className="podcastsTitle d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap mb-4">
          <img src={Mpodcast} alt="פודקאסט" />
          <h4 className="pt-4">פודקאסטים</h4>
          <img src={blackLine} className="pt-4" alt="קו" />
          <img src={podcastBtn} alt="כפתור" />
        </div>

        <div className="row g-4">
          {podcasts.map((podcast, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div className="position-relative">
                <div className="podcastPost d-flex flex-row text-end gap-3">
                  <div className="podcastImage">
                    <img
                      src={podcast.img}
                      alt={podcast.title}
                      className="img-fluid p-2"
                      style={{
                        maxWidth: "200px",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="podcastContent d-flex flex-column justify-content-around h-100">
                    <div>
                      <h4>{podcast.name}</h4>
                      <h6>{podcast.role}</h6>
                      <p className="p-2">{podcast.quote}</p>
                    </div>
                    <small className="text-muted">{podcast.time}</small>
                  </div>
                </div>

                <img
                  src={playBtn}
                  alt="Play"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "50px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                />

                <img
                  src={podBtn}
                  alt="Podcast"
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    width: "132px",
                    height: "27px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Podcasts;
