import React, { useState } from "react";

function Expansion({ pic, name, num, songt }) {
  const askSongt = true;
  const askName = name === "Green Tuska";
  const [songTitle] = useState(askSongt ? true : false);
  const [setName] = useState(askName ? true : false);
  return (
    <div className="expansion">
      <div className="expansion__wrap">
        <div className="num__expansion">{num}</div>
        <img src={pic} alt="cover" className="pic__expansion" />
        <div className="name__expansion__wrap">
          <p className="name__expansion">{name}</p>
          {songTitle && <p className="songt__expansion">{songt}</p>}
        </div>
      </div>
      <i
        class={`fas fa-heart ${
          setName ? "love__expansions" : "love__expansion"
        }`}></i>
    </div>
  );
}

export default Expansion;
