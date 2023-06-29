import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="mainnavbardiv">
        <div>
          <img
            src="https://www.goindiastocks.com/Content/assets/images/logewithname.png"
            className="logonavbar"
          />
        </div>
        <div>
          <input className="searchbar" type="text" />
        </div>
        <div className="contactdiv">
          <a className="contacttag" href="">Contact Us</a>
        <button className="signupinbtn" > <a id="signupfont" href="">SIGN UP</a></button>
        <button className="signupinbtn" > <a id="signupfont" href="">SIGN IN</a> </button>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
