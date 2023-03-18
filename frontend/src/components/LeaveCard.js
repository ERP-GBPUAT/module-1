import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const LeaveCard = () => {
  const params = useParams();
  const leaveType = params.lcategory;
  console.log(leaveType);
  const id = 23;
  return (
    <div className="dashLeaves">
      <Link
        to={`/detailPage/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="l">
          <div className="year">January, 2023</div>
          <div className="leave">
            <div className="leaveDetails">
              <div className="up">Monday, 29 Jan</div>
              <div className="down" style={{ color: "#fad517" }}>
                Casual
              </div>
            </div>
            <div className="leaveStatus">Pending</div>
          </div>
        </div>
      </Link>
      <Link
        to={`/detailPage/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
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
              className="leaveStatus"
              style={{ color: "#34DC0A", backgroundColor: "#EAF4EB" }}
            >
              Approved
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/detailPage/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="l">
          <div className="year">January, 2023</div>
          <div className="leave">
            <div className="leaveDetails">
              <div className="up">Monday, 29 Jan</div>
              <div className="down" style={{ color: "#08903F" }}>
                Earned
              </div>
            </div>
            <div
              className="leaveStatus"
              style={{ color: "#DC0A0A", backgroundColor: "#FDDBDB" }}
            >
              Declined
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LeaveCard;
