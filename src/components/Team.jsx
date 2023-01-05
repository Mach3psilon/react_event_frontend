import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2></h2>
          <p></p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 col-xs-4 team"
                >
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <a href={d.website}>
                        <h4>{d.name}</h4>
                      </a>
                      <p>{d.job}</p>
                      <a href={d.linkedin} style={{ paddingRight: 30 }}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                      <a href={"mailto: " + d.email}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
