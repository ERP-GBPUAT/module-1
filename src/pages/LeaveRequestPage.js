import React from "react";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

const LeaveRequestPage = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <div className="dashboard">
        <div className="dashHeader">
          <div style={{ margin: "auto" }}>LEAVE REQUESTS</div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequestPage;
