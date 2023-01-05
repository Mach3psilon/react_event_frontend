import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export const Mentor = (props) => {
  const [clicked, setClicked] = useState("");
  const [notMagnified, setNotMagnified] = useState(
    "col-md-3 col-sm-6 col-xs-4 team"
  );
  const [magnified, setMagnified] = useState("col-md-3 col-sm-6 col-xs-4 team");

  const handleClick = (event) => {
    if (clicked === event) {
      setClicked("");
      setMagnified("col-md-3 col-sm-6 col-xs-4 team");
      setNotMagnified("col-md-3 col-sm-6 col-xs-4 team");
    } else {
      setClicked(event);
      setMagnified("col-md-12 col-sm-12 col-xs-12 team magnified");
      setNotMagnified("col-md-3 col-sm-6 col-xs-4 team invisible");
    }

    // console.log(event.currentTarget.getAttribute("class"));
  };

  return (
    <div id="mentor" className="text-center">
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
                  onClick={() => handleClick(i)}
                  className={clicked === i ? magnified : notMagnified}
                >
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <a href={d.linkedin} style={{ paddingRight: 30 }}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                      <a href={"mailto: " + d.email}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                      {clicked === i ? <p> {d.about} </p> : null}
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
