import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2></h2>
          <p>
            <a style={{ color: "#bb0fe0", fontWeigh: "bold" }} href="/">
              {" "}
            </a>
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <a href={d.gameLink}>
                    <div
                      key={`${d.title}-${i}`}
                      className="col-xs-6 col-sm-4 col-md-4 col-lg-4"
                    >
                      <Image title={d.title} smallImage={d.smallImage} />
                    </div>
                  </a>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
