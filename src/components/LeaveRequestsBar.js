import React, { useEffect, useState } from "react";
import "./LeaveRequestBar.css";
import { useNavigate } from "react-router-dom";

const LeaveRequestsBar = ({ token }) => {
  const [deptLeaves, setDeptLeaves] = useState([]);
  const leavesRequests = 3;
  const navigate = useNavigate();
  useEffect(() => {
    async function getLeaves() {
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
    getLeaves();
  }, [token]);
  console.log(deptLeaves);

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
