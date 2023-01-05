import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Mentor } from "./components/Mentor";
import { Faqi } from "./components/faqi";
import { Register } from "./components/register";
import { Contact } from "./components/contact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

library.add(fab, faCheckSquare, faCoffee)

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      
      <About data={landingPageData.About} />
      
      <Testimonials data={landingPageData.Testimonials} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Mentor data={landingPageData.Mentor} />
      <Team data={landingPageData.Team} />
      <Faqi/>
      <Register/>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
