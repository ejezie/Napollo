import React from "react";
import imagemain from "../images/imagemain.PNG";
import logonapollo from "../images/logonapollo.png";

function Landing() {
  return (
    <div className="landing">
      <section id="one">
        <div className="text__wrap">
          <h2 className="text__one">
            More fans, More Gigs, Less Effort Get better feedback, wider
            exposure and deeper industry access without ever switching tabs.
          </h2>
          <button className="button__one">Lets get started</button>
        </div>
        <div className="image__one__wrap">
          <div className="blur"></div>
          <img src={imagemain} alt="music" className="image__one" />
        </div>
      </section>
      {/*  */}
      <section id="two">
        <div className="text__two__wrap">
          <h2 className="text__two__head">About Napollo</h2>
          <p className="text__two">
            Napol lo is a music streaming reaming service that connects artistes
            to listeners in a way that has never been done before.
          </p>
          <p className="text__two">
            Artists, musicians, music lovers, producers, no matter your taste or
            skills are, we are here to serve you the best all around the world.
          </p>
        </div>
        <img src={logonapollo} alt="logo" className="logo__two"/>
      </section>
    </div>
  );
}

export default Landing;
