import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
} from "@fortawesome/free-solid-svg-icons";

export const Features = (props) => {
  return (
    <div id="prizes" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2></h2>
        </div>
        <div className="row prizes">
          <div className="col-xs-12 col-md-12 prize">
            <a>
              {" "}
              <FontAwesomeIcon icon={faDiceOne} />
            </a>
            <h3></h3>
            <p></p>
          </div>
          <div className="col-xs-6 col-md-6 prize">
            <a>
              <FontAwesomeIcon icon={faDiceTwo} />
            </a>
            <h3></h3>
            <p></p>
          </div>
          <div className="col-xs-6 col-md-6 prize">
            <a>
              <FontAwesomeIcon icon={faDiceThree} />
            </a>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
