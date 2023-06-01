import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";

const LeaveRequestPage = ({ user, token, isDean }) => {
  const [deptLeaves, setDeptLeaves] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getLeaves() {
      if (isDean.length > 0) {
        const res = await fetch(
          "http://localhost:8080/facultyLeave/getAllLeaves",
          {
            method: "GET",
            headers: {
              token: token,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setDeptLeaves(
          data.data.filter((d) => d.status === 0 || d.status === 1)
        );
      } else {
        const res = await fetch(
          "http://localhost:8080/facultyLeave/getLeavesByDept",
          {
            method: "GET",
            headers: {
              token: token,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setDeptLeaves(data.data.filter((d) => d.status === 0));
      }
    }
    getLeaves();
  }, [token, isDean]);

  const openLeaveApplicationHandler = (appId) => {
    navigate(`./${appId}`);
  };
  return (
    <>
      <Header />
      <UserInfo currentUser={user} isDean={isDean} />
      <div className="dashboard">
        <div className="dashHeader">
          <div style={{ margin: "auto", marginBottom: "2rem" }}>
            LEAVE REQUESTS
          </div>
        </div>
        {deptLeaves.length === 0 ? (
          <span className="noLeaves">No Leaves Requests</span>
        ) : (
          deptLeaves.map((leave) => (
            <div key={uuidv4()} className="l">
              <div className="year">
                {new Date(leave.createdAt).toLocaleString()}
              </div>
              <div className="leave">
                <div className="leaveDetails">
                  <div className="up">{leave.startDate}</div>
                  <div
                    className="down"
                    style={{
                      color: "#5291f0",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {leave.type.split(" ")[0]}
                  </div>
                </div>
                <div
                  className="leaveS"
                  onClick={() => openLeaveApplicationHandler(leave.id)}
                  style={{ color: "#34DC0A", backgroundColor: "#EAF4EB" }}
                >
                  Open
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default LeaveRequestPage;
