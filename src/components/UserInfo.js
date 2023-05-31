import React from "react";
import user from "../assets/user.png";
import "./UserInfo.css";

const UserInfo = ({ currentUser, isDean }) => {
  // console.log(currentUser);
  console.log(isDean);
  return (
    <div className="userInfo">
      <div className="profile">
        <img src={user} alt="userProfile" />
      </div>
      <div className="about">
        <div className="name">{currentUser.user.name}</div>
        {isDean.length > 0 ? (
          <div className="designation">DEAN, {isDean}</div>
        ) : (
          <div className="designation">
            {currentUser.faculty.designation}, {currentUser.faculty.department}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
