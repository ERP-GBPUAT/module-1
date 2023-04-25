import React from "react";
import "./LeaveRequestBar.css";
import { useNavigate } from "react-router-dom";

const LeaveRequestsBar = () => {
  const leavesRequests = 3;
  const navigate = useNavigate();

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
