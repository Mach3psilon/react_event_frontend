import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only"></span> <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll navbar-brand-alt"
            href="#page-top"
          ></a>
        </div>
d
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#page-top" className="page-scroll">
                
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
               
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
               
              </a>
            </li>

            <li>
              <a href="#services" className="page-scroll">
                
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                
              </a>
            </li>

            <li>
              <a href="#mentor" className="page-scroll">
               
              </a>
            </li>
            {/*<li>
              <a href='#team' className='page-scroll'>
                
              </a>
            </li>*/}
            <li>
              <a href="#faq" className="page-scroll">
               
              </a>
            </li>
            <li>
              <a href="#register" className="page-scroll">
               
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                
              </a>
            </li>
            <li>
              <a href="" className="page-scroll">
                 &nbsp;{" "}
                <FontAwesomeIcon icon={["fab", "discord"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
