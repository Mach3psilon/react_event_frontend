import { Image } from "./image";

export const Games = (props) => {
  return (
    <div id="games" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2></h2>
          <p>
            <a style={{ color: "#bb0fe0", fontWeigh: "bold" }} href="">
              {" "}
            </a>{" "}
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <a
              href="d.gameLink"
              className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
            >
              <Image title="" smallImage="{d.smallImage}" />
            </a>

            {props.data
              ? props.data.map((d, i) => (
                  <a href={d.gameLink}>
                    <div
                      key={`${d.title}-${i}`}
                      className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
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
