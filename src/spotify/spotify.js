import React from "react";

const Spotify = () => {
  return (
    <div>
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/artist/56Y4IMRJDQcagdjb8J47Ns?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
