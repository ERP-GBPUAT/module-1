import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
// import { dummyFaculty } from "../dummyData/dummyfaculty";
import LeaveRequestsBar from "../components/LeaveRequestsBar";

const HomePage = ({ user, token }) => {
  // const currentUser = dummyFaculty[0];
  // const currentUserType = currentUser.type;
  console.log(user);
  console.log();
  return (
    <>
      <Header />
      <UserInfo currentUser={user} />
      {user.faculty.designation.toLowerCase().split(" ").includes("dean") ? (
        <div></div>
      ) : (
        <Dashboard user={user} token={token} />
      )}
      {user.faculty.designation
        .toLowerCase()
        .split(" ")
        .includes("professor") ||
      user.faculty.designation.toLowerCase().split(" ").includes("hod") ? (
        <></>
      ) : (
        <LeaveRequestsBar token={token} />
      )}
    </>
  );
};

export default HomePage;
