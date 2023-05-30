import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
// import { dummyFaculty } from "../dummyData/dummyfaculty";
import LeaveRequestsBar from "../components/LeaveRequestsBar";

const HomePage = ({ user }) => {
  const [user,setUser] = useState({})
  // const currentUser = dummyFaculty[0];
  const [loading,setLoading] = useState(true);
  // const currentUserType = currentUser.type;
  useEffect(() => {
    setLoading(true);
    setUser(JSON.parse(localStorage.getItem('data')))
    setLoading(false);
  }, [])
  
  console.log(user);
  console.log();
  return (
    <>
    {loading?<div>Loading...</div>:
    <>
      <Header />
      <UserInfo currentUser={user} />
      {user.faculty.designation.toLowerCase().split(" ").includes("dean") ? (
        <div></div>
      ) : (
        <Dashboard user={user} />
      )}
      {user.faculty.designation
        .toLowerCase()
        .split(" ")
        .includes("professor") ||
      user.faculty.designation.toLowerCase().split(" ").includes("hod") ? (
        <></>
      ) : (
        <LeaveRequestsBar />
      )}
      </>}
    </>
  );
};

export default HomePage;
