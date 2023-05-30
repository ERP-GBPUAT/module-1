import React from "react";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";
// import { dummyFaculty } from "../dummyData/dummyfaculty";

const LeaveRequestPage = ({ user }) => {
  const navigate = useNavigate();

  // const currentUser = dummyFaculty[0];

  const openLeaveApplicationHandler = (appId) => {
    console.log(appId);
    navigate(`./${appId}`);
  };
  return (
    <>
      <Header />
      <UserInfo currentUser={user} />
      <div className="dashboard">
        <div className="dashHeader">
          <div style={{ margin: "auto" }}>LEAVE REQUESTS</div>
        </div>
        <div className="l">
          <div className="year">January, 2023</div>
          <div className="leave">
            <div className="leaveDetails">
              <div className="up">Wednesday, 09 Feb</div>
              <div className="down" style={{ color: "#FD3D49" }}>
                Medical
              </div>
            </div>
            <div
              className="leaveS"
              onClick={() => openLeaveApplicationHandler("1")}
              style={{ color: "#34DC0A", backgroundColor: "#EAF4EB" }}
            >
              Open
            </div>
          </div>
        </div>
        <div className="l">
          <div className="year">January, 2023</div>
          <div className="leave">
            <div className="leaveDetails">
              <div className="up">Wednesday, 09 Feb</div>
              <div className="down" style={{ color: "#FD3D49" }}>
                Medical
              </div>
            </div>
            <div
              className="leaveS"
              onClick={() => openLeaveApplicationHandler("2")}
              style={{ color: "#34DC0A", backgroundColor: "#EAF4EB" }}
            >
              Open
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequestPage;
