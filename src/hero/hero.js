import React from "react";
import buddy from "../images/buddy.jpg";
import "./hero.css";
const Hero = () => {
  return (
    <React.Fragment>
      <div className="img-wrapper">
        <img src={buddy} class="img-fluid mt-n1" alt="..." />
      </div>
      <div className="img-overlay copy px-10">
        "an art punk band that had the entire crowd on their feet and shouting
        for more. Known for their unique combination of spoken word and
        shout-sung melodies, Buddy Wynkoop proved why they are considered one of
        the most exciting acts on the PDX music scene. Their latest single,
        "Relatable," was an instant earworm that had fans singing along with
        every word. The energy and passion that Buddy Wynkoop brought to the
        stage was intoxicating, and being on the bill of a sold-out show was a
        testament to their growing fanbase. Make sure to give them a follow to
        stay up-to-date on their next shows because they are a band that you
        won't want to miss live." ~ Rose City Review
      </div>
    </React.Fragment>
  );
};

export default Hero;
