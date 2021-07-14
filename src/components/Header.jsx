import React from "react";

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
        </div>
        <div className="header__center">

        </div>
        <div className="header__right">
            <div className="header__right__wrap">
                <div className="store__logo__w">

                </div>
                <p className="auth">
                    <span>Sign In/</span>
                    <span>Sign up</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
