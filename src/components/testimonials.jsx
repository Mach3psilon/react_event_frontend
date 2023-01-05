import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
export const Testimonials = (props) => {
  const [clicked, setClicked] = useState("");
  const [notMagnified, setNotMagnified] = useState("closed");
  const [magnified, setMagnified] = useState("opened");
  const [change, setChange] = useState(0);

  const handleClick = (event) => {
    if (clicked === event) {
      setClicked("");
      setMagnified("");
      setNotMagnified("");
      if (change === 0) {
        setChange(1);
      } else {
        setChange(0);
      }
    } else {
      setClicked(event);
      setMagnified("opened");
      setNotMagnified("closed");
      setChange(1);
      Slide.goTo(event);
    }
    const handleSomething = (event) => {
      console.log(event);
    };

    // console.log(event.currentTarget.getAttribute("class"));
  };

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "10px",
    fontSize: "30px",
  };

  const properties = {
    duration: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
    canSwipe: true,
    infinite: true,
    arrows: false,
  };

  const properties2 = {
    duration: 10000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    indicators: false,
    canSwipe: true,
    infinite: true,
    arrows: false,
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2></h2>
        </div>
        <div>
          <div>
            <Slide {...(change === 0 ? { ...properties } : { ...properties2 })}>
              {props.data
                ? props.data.map((d, i) => (
                    <div key={`${d.name}-${i}`} onClick={() => handleClick(i)}>
                      <div style={style} className="slide-element">
                        {clicked === i ? (
                          <div>
                            <img src="/img/point_down.png" alt="point-down" />{" "}
                          </div>
                        ) : (
                          <img src={d.img} alt={d.name} />
                        )}
                        <br></br>

                        {clicked === i ? null : d.name}
                        <h3>{d.day}</h3>
                        <h3>{d.hours}</h3>
                      </div>
                    </div>
                  ))
                : "loading"}
            </Slide>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} onClick={() => handleClick(i)}>
                    {clicked === i ? (
                      <div style={style} className="slide-element">
                        <img
                          className="big-slide-image"
                          src={d.img}
                          alt={d.name}
                        />
                        <br></br>
                        {d.name}
                        <a
                          href={d.linkedin}
                          style={{ paddingRight: 30, paddingLeft: 10 }}
                        >
                          <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </a>
                        <p> {d.about} </p>
                        <p>{d.time}</p>
                      </div>
                    ) : null}
                  </div>
                ))
              : "loading"}
          </div>
        </div>

        {/*<div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>*/}
      </div>
    </div>
  );
};
