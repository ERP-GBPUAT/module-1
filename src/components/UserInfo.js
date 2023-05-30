import React from "react";
import user from "../assets/user.png";
import "./UserInfo.css";

const UserInfo = ({ currentUser }) => {
  // console.log(currentUser);
  return (
    <div className="userInfo">
      <div className="profile">
        <img src={user} alt="userProfile" />
      </div>
      <div className="about">
        <div className="name">{currentUser.user.name}</div>
        <div className="designation">
          {currentUser.faculty.designation}, {currentUser.faculty.department}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
