import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";

const HomePage = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <Dashboard />
    </>
  );
};

export default HomePage;
