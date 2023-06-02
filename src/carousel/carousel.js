import React from "react";
import "./carousel.css";
const Carousel = () => {
  return (
    <React.Fragment>
      <div className="media">
        <div className="media-medium d-flex justify-content-center">
          <iframe
            width="350"
            height="400"
            src="https://www.youtube.com/embed/k4ONndi7FgQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="media-left">
          <div className="media-left-container d-flex justify-content-center">
            Buddy Wynkoop Injects a Self-Aware Neurotic Fury Into Its Math Rock
            Punk Single “Relatable”
          </div>
          <div className="author">
            <div>
              <small className="fs-6">~Queen City Sounds and Art</small>
            </div>
            <div>
              <a
                className="read-more"
                href="https://queencitysoundsandart.wordpress.com/2023/05/04/buddy-wynkoop-injects-a-self-aware-neurotic-fury-into-its-math-rock-punk-single-relatable/"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
