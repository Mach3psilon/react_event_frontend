import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [],
};

const styles = {
  bgColor: "f6f6f6",
  titleTextColor: "#fff",
  // titleTextSize: '48px',
  rowTitleColor: "#bb0fe0",

  // rowTitleTextSize: 'medium',
  // rowContentColor: 'grey',
  rowContentTextSize: "16px",
  // rowContentPaddingTop: '10px',
  rowContentPaddingBottom: "10px",
  //rowContentPaddingLeft: '50px',

  // rowContentPaddingRight: '150px',
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export const Faqi = (props) => {
  return (
    <div id="faq" className="text-center">
      <div className="section-title">
        <h2>S.S.S.</h2>
      </div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
