import React from "react";
import user from "../assets/user.png";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="profile">
        <img src={user} alt="userProfile" />
      </div>
      <div className="about">
        <div className="name">Faculty Name</div>
        <div className="designation">Designation</div>
      </div>
    </div>
  );
};

export default UserInfo;
