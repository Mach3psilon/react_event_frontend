export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2></h2>
          <p></p>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            {" "}
            <a href="">
              <img alt="" src="" className="sponsor-img"></img>
            </a>
            <div className="service-desc">
              <h3></h3>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
            {" "}
            <a href="">
              <img alt="" src="" className="sponsor-img"></img>
            </a>
            <div className="service-desc">
              <h3></h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
            {" "}
            <a href="">
              <img alt="" src="" className="sponsor-img"></img>
            </a>
            <div className="service-desc">
              <h3></h3>
            </div>
          </div>

          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                >
                  {" "}
                  <a href={d.link}>
                    <img
                      alt={d.name}
                      src={d.img}
                      className="sponsor-img logo-height"
                    ></img>
                  </a>
                  <div className="service-desc">
                    <h3>{d.text}</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
