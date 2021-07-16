import React, { useState } from "react";

function Play({ image, song, artiste, likes }) {
  const ask = song === "Hate Me";
  const [loved] = useState(ask ? true : false);
  return (
    <div className="play">
      <img src={image} alt="cover" className="cover" />
      <div className="song__wrap">
        <p className="song">{song}</p>
        {loved ? (
          <i class="fas fa-heart love"></i>
        ) : (
          <i class="far fa-heart loved"></i>
        )}
      </div>
      <div className="artiste__wrap">
        <p className="artiste">{artiste}</p>
        <p className="likes">{likes}</p>
      </div>
    </div>
  );
}

export default Play;
