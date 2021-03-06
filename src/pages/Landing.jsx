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
import casset from "../images/casset.png";
import planone from "../images/planone.png";
import plantwo from "../images/plantwo.png";
import cardpic from "../images/cardpic.png";
import devices from "../images/devices.png";
import appledown from "../images/appledown.png";
import googledown from "../images/googledown.png";
import Play from "../components/Play";
import Expansion from "../components/Expansion";
import Card from "../components/Card";

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
        <img src={phoneexp} alt="smart phone" className="phoneexp" />
        <div className="four__wrap">
          <h1 className="expansion__header">Expansion Page</h1>
          <p className="expansion__text">
            Discover artistes all around the world by their location via the
            expansion page. Also, get to know the top artistes in any location
            on the globe.
          </p>
          <div className="expansion_play__wrap">
            <Expansion
              num="01"
              pic={xplayone}
              name="ColdPlay"
              songt="Lights Out"
            />
            <Expansion num="02" pic={xplaytwo} name="Green Tuska" />
            <Expansion num="03" pic={xplaythree} name="Bruno Mars" />
            <Expansion num="04" pic={xplayfour} name="Cardi" />
          </div>
        </div>
      </section>
      {/*  */}
      <section id="five">
        <div className="five__wrap">
          <div className="five__background">
            <img src={casset} alt="" className="five__image" />
            <div className="five__text__wrap">
              <h1 className="five__header">
                Listen and enjoy all trending music
              </h1>
              <div className="five__list">
                <div className="list__wrap">
                  <div className="dot"></div>
                  What's hot
                </div>
                <div className="list__wrap">
                  <div className="dot"></div>
                  By genre
                </div>
                <div className="list__wrap">
                  <div className="dot"></div>
                  By location
                </div>
                <div className="list__wrap">
                  <div className="dot"></div>
                  Lots more...
                </div>
              </div>
              <button className="five__button">Start listening</button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section id="six">
        <div className="six__wrap">
          <h1 className="six__header">Choose Your Plan</h1>
          <div className="six__image__wrap">
            <img src={planone} alt="plan" className="planone" />
            <img src={plantwo} alt="plan" className="plantwo" />
          </div>
        </div>
      </section>
      {/*  */}
      <section id="seven">
        <h1 className="seven__header">Testimonials</h1>
        <div className="card__wrap">
          <Card
            text="This is the best app i have come across, i was able to upscale my career in 10 weeeks"
            image={cardpic}
            genre="R&B/Soul"
            name="French Banton"
          />
          <Card
            text="Beign an artiste on Napollo has been a real game changer.
            "
            image={cardpic}
            genre="Pop Artiste"
            name="Hanna Gosley"
          />
          <Card
            text="Napollo is such a great platform. I'm
            getting exposure and opportunities that"
            image={cardpic}
            genre="Rapper"
            name="Joy Banton"
          />
        </div>
      </section>
      {/*  */}
      <section id="eight">
        <div className="eight__wrap">
          <img src={devices} alt="phones" className="eight__image" />
          <div className="eight__text">
            <h1 className="eight__header">
              Download our iOS and Android apps <span>for Free</span>
            </h1>
            <p>
              Downloaded over 10 million times in less than six months, our
              cross-platform app allows you to listen to, discover, favorite,
              and share music on the go.
            </p>
            <div className="eight__image__wrap">
              <img src={appledown} alt="apple store" />
              <img src={googledown} alt="google store" />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section id="footer">
        <div className="footer__wrap">
          <div className="left__footer">
            <img src={logonapollo} alt="logo" />
            <p className="copy__right">
              <i class="far fa-copyright"></i> 2021 Napollo
            </p>
            <div className="legal">
              <p>legal</p>
              <p>privacy</p>
              <p>cokies</p>
            </div>
          </div>
          <div className="footer__center">
            <p>Napollo</p>
            <p>Artist Membership </p>
            <p>Listener </p>
            <p>Listener</p>
            <p>About</p>
            <p>Overview</p>
            <p>Overview</p>
            <p>Terms of Service</p>
            <p>Sign Up</p>
            <p>Pricing</p>
            <p>Pricing</p>
            <p>Privacy Policy</p>
            <p>Forgot Password</p>
            <p>Opportunies</p>
            <p>Suggested Playlist</p>
            <p>Copyright policy </p>
            <p>Contact</p>
            <p>Shows</p>
            <p>Discover</p>
            <p>Cookies</p>
            <p>Help </p>
            <p>Reviews</p>
            <p>Trademark</p>
          </div>
          <div className="footer__right">
            <p>Follow us</p>
            <div className="icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram-square"></i>
            </div>
            <p>Download App</p>
            <div className="download__wrap">
              <img src={appledown} alt="store" />
              <img src={googledown} alt="store" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
