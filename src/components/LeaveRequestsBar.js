import React, { useEffect, useState } from "react";
import "./LeaveRequestBar.css";
import { useNavigate } from "react-router-dom";

const LeaveRequestsBar = ({ user, token, isDean }) => {
  const [deptLeaves, setDeptLeaves] = useState([]);
  const navigate = useNavigate();
  console.log(isDean.length);
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
        setDeptLeaves(data.data);
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
        setDeptLeaves(data.data);
      }
    }
    getLeaves();
  }, [token, isDean]);
  console.log(deptLeaves);
  const leavesRequests = deptLeaves.length;

  const showReqHandler = () => {
    navigate("/leaveRequests");
  };
  return (
    <div className="leaveR">
      <div>{leavesRequests} new Leave Requests Received</div>
      <div className="check" onClick={showReqHandler}>
        Check Here
      </div>
    </div>
  );
};

export default LeaveRequestsBar;
