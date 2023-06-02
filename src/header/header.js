import React from "react";
import "./header.css";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaRegHandPointRight } from "react-icons/fa";
import { SiBandcamp } from "react-icons/si";
const Header = () => {
  return (
    <React.Fragment>
      <div className="d-flex fs-6 listenNow fixed-top p-2">
        <div className="left"></div>
        <div className="middle">
          <div className="">New Single "Relatable" out now!</div>
        </div>
        <div className="right">
          <div id="finger">
            <FaRegHandPointRight className="mx-1 icon" />
          </div>
          <a href="https://open.spotify.com/track/2NAQaMFHjlg0LxpZSosQGe?si=0f2e25e798154956>">
            <FaSpotify className="mx-1 icon" />
          </a>
          <a href="https://music.apple.com/us/album/relatable/1673902268?i=1673902269">
            <SiApplemusic className="mx-1 icon" />
          </a>
          <a href="https://www.youtube.com/watch?v=u40T9EQg8UI">
            <BsYoutube className="mx-1 icon" />
          </a>
          <a href="https://buddywynkoop.bandcamp.com/track/relatable">
            <SiBandcamp className="mx-1 icon" />
          </a>
        </div>
      </div>
      <div className="fs-1 d-flex justify-content-center buddy text-white">
        <div className="titleB mx-1">B</div>
        <div className="titleU  mx-1">U</div>
        <div className="titleD mx-1">D</div>
        <div className="titleDd mx-1">D</div>
        <div className="titleY mx-1">Y</div>
        <div className="titleW mx-1">W</div>
        <div className="titleY mx-1">Y</div>
        <div className="titleN mx-1">N</div>
        <div className="titleK mx-1">K</div>
        <div className="titleO mx-1">O</div>
        <div className="titleOo mx-1">O</div>
        <div className="titleP mx-1">P</div>
      </div>
      <div></div>
    </React.Fragment>
  );
};

export default Header;
