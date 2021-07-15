import React from "react";
import imagemain from "../images/imagemain.PNG";
import logonapollo from "../images/logonapollo.png";
import playone from "../images/playone.PNG";
import playtwo from "../images/playtwo.png";
import playthree from "../images/playthree.png";
import playfour from "../images/playfour.png";
import playfive from "../images/playfive.png";
import playsix from "../images/playsix.png";
import xplayone from "../images/xplayone.PNG";
import xplaytwo from "../images/xplaytwo.PNG";
import xplaythree from "../images/xplaythree.PNG";
import xplayfour from "../images/xplayfour.png";
import phoneexp from "../images/phoneexp.png";
import playphone from "../images/playphone.png";
import Play from "../components/Play";
import Expansion from "../components/Expansion";

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
        <img src={logonapollo} alt="logo" className="logo__two" />
      </section>
      {/*  */}
      <section id="three">
        <div className="three__blanket">
          <div className="three__wrap">
            <h1 className="three__header">What's Hot!</h1>
            <div className="play__wrap">
              <div className="play__text">
                <p className="view__title">Album</p>
                <p className="view__all">
                  View All <i class="fas fa-greater-than"></i>
                </p>
              </div>
              <div className="play__comp__wrap">
                <Play
                  image={playone}
                  song="Death Bed"
                  likes="1.3k"
                  artiste="Powerful"
                />
                <Play
                  image={playtwo}
                  song="Faded"
                  likes="1.3k"
                  artiste="Alan Walker"
                />
                <Play
                  image={playthree}
                  song="Hate Me"
                  likes="1.3k"
                  artiste="Ellie Goulding"
                />
              </div>
            </div>
            <div className="play__wrap">
              <div className="play__text">
                <p className="view__title">Singles & Eps</p>
                <p className="view__all">
                  View All <i class="fas fa-greater-than"></i>
                </p>
              </div>
              <div className="play__comp__wrap">
                <Play
                  image={playfour}
                  song="Lets Dance"
                  likes="1.3k"
                  artiste="Bowle"
                />
                <Play
                  image={playfive}
                  song="Bad Romance"
                  likes="1.3k"
                  artiste="Rihanna"
                />
                <Play
                  image={playsix}
                  song="Fly"
                  likes="1.3k"
                  artiste="Cold Play"
                />
              </div>
            </div>
          </div>
          <button className="three__button">
            <i class="fas fa-greater-than greater"></i>
          </button>
        </div>
        <img src={playphone} alt="playmusic" className="playphone" />
      </section>
      {/*  */}
      <section id="four">
          <Expansion num="01" pic={xplayone} name="ColdPlay"/>
      </section>
    </div>
  );
}

export default Landing;
