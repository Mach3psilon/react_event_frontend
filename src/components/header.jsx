import Countdown from "react-countdown";
import DateCountdown from "react-date-countdown-timer";

export const Header = (props) => {
  const Completionist = () => <span></span>;

  return (
    <header className="header" id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 intro-text">
                <h1>
                  <br></br> <br></br>
                  <span></span>
                </h1>
                <p>
                  <Countdown date={"2022-03-18T21:00:00"}>
                    <Completionist />
                  </Countdown>
                </p>
                {/*<p>{props.data ? props.data.paragraph : 'Loading'}</p>*/}
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                ></a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
