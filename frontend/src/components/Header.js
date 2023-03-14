import React from "react";
import gbpuat from "../assets/gbpuat.png";
import user from "../assets/user.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={gbpuat} alt="gbpuatlogo" />
      </div>
      <div className="userImg">
        <img src={user} alt="userlogo" />
      </div>
    </div>
  );
};

export default Header;
