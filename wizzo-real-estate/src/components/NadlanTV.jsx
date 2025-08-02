import MTv from "../media/MTv.png";
import tvBtn from "../media/tvBtn.png";
import tvLine from "../media/tvLine.png";
import tvMainVideo from "../media/tvMainVideo.png";
import articleImg from "../media/tvVideos.png";
import tvTag from "../media/tvTag.png";

const NadlanTV = () => {
  const description =
    "מי אחראי? עד כמה המדינה והמחוקק צריכים להתערב בעסקאות התחדשות עירונית";
  const date = "18.09.24  |  מרכז הנדל";

  return (
    <div className="tvDiv container-fluid" id="nadlan" dir="rtl">
      <div className="d-flex flex-column justify-content-center align-items-center inTvDiv">
        <div className="tvTitle d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap mb-4">
          <div className="d-flex flex-row align-items-center">
            <img src={MTv} alt="mtv" />
            <h3 className="text-light px-3">נדל״ן TV</h3>
          </div>
          <div className="pt-4">
            <img src={tvLine} alt="tvLine" />
          </div>
          <div>
            <img src={tvBtn} alt="tvBtn" />
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-stretch gap-4">
          <div className="mainVideo text-white p-2">
            <div className="position-relative">
              <img src={tvMainVideo} alt="Main Hero" className="img-fluid" />
              <img
                src={tvTag}
                alt="tvTag"
                className="position-absolute bottom-0 end-0"
              />
            </div>

            <small className="text-secondary">18.09.24 | מרכז הנדל"ן</small>
            <p className="mt-3">
              מפנה מקום לחדש: אירוע הריסה של חברת אלרם בוטיק ברמברנדט 36
            </p>
            <p>
              תושבי בניין רמברנדט 36 בת"א באו להיפרד מהמבנה הישן לטובת בניין
              חדש, צעיר ונוצץ. שוחחנו עם מנכל חברת אלרם בוטיק, שי הראל, ונציגות
              הדיירים, ושמענו מהם על התחושות ביום ההריסה המורכב.
            </p>
          </div>

          <div className="d-flex flex-column justify-content-around">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="d-flex text-light"
                style={{ backgroundColor: "#130822" }}
              >
                <div className="position-relative">
                  <img src={articleImg} className="tvVideos p-2" />
                  <img
                    src={tvTag}
                    alt="tvTag"
                    className="position-absolute bottom-0 end-0 p-2"
                  />
                </div>
                <div className="p-2 text-end d-flex flex-column justify-content-center">
                  <p className="mb-1">{description}</p>
                  <small className="text-secondary">{date}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NadlanTV;
