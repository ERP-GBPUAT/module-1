import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
// import { dummyFaculty } from "../dummyData/dummyfaculty";
import LeaveRequestsBar from "../components/LeaveRequestsBar";

const HomePage = ({ user, token }) => {
  // const [u, setU] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   setU(JSON.parse(localStorage.getItem("data")));
  //   setLoading(false);
  // }, []);

  console.log(user.faculty.deanOfCollege);
  return (
    // <>
    //   {loading ? (
    //     <div>Loading...</div>
    //   ) : (
    <>
      <Header />
      <UserInfo currentUser={user} isDean={user.faculty.deanOfCollege} />
      {user.faculty.deanOfCollege.length > 0 ? (
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
        <LeaveRequestsBar
          user={user}
          token={token}
          isDean={user.faculty.deanOfCollege}
        />
      )}
    </>
    // )}
    // </>
  );
};

export default HomePage;
