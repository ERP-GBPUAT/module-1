import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import LeaveRequestsBar from "../components/LeaveRequestsBar";

const HomePage = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <Dashboard />

      {/* When user is either HOD or Dean */}
      <LeaveRequestsBar />
    </>
  );
};

export default HomePage;
