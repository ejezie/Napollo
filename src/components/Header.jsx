import React from "react";
import appledown from "../images/appledown.png";
import googledown from "../images/googledown.png";
import logonapollo from "../images/logonapollo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="left__header">
          <div className="hamburger__wrap">
            <div className="hamburger__menu"></div>
            <div className="hamburger__menu"></div>
            <div className="hamburger__menu"></div>
          </div>
          <img src={logonapollo} alt="Logo" className="main__logo" />
        </div>
        <div className="header__center">
          <form action="#" className="search__form">
            <textarea
              name="search"
              id="search"
              placeholder="Search for artiste, songs and album"></textarea>
            <button className="search__button">
              <i class="far fa-search search__icon"></i>
            </button>
          </form>
        </div>
        <div className="header__right">
          <div className="header__right__wrap">
            <div className="store__logo__wrap">
              <img src={appledown} alt="applestore" className="appledown" />
              <img src={googledown} alt="playstore" className="googledown" />
            </div>
            <div className="auth">
              <span>Sign In/</span>
              <span>Sign up</span>
            </div>
            <button className="upload__button">
              <div className="button__content">
                <i class="fad fa-upload upload__icon"></i> Upload
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
