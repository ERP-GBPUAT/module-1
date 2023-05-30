import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const LeaveCard = ({ leaves }) => {
  const [currLeave, setCurrLeave] = useState([]);
  const helper = [
    { status: 0, color: "#fad517", backgroundColor: "#fffeda", tag: "Pending" },
    { status: 1, color: "#fad517", backgroundColor: "#fffeda", tag: "Pending" },
    {
      status: 2,
      color: "#34DC0A",
      backgroundColor: "#EAF4EB",
      tag: "Approved",
    },
    {
      status: -1,
      color: "#DC0A0A",
      backgroundColor: "#FDDBDB",
      tag: "Rejected",
    },
  ];
  const params = useParams();
  const leaveT = params.lcategory;
  useEffect(() => {
    let temp = [];
    if (leaveT === undefined) temp = leaves;
    else {
      temp = leaves.filter(function (l) {
        return l.leaveType.split(" ")[0].toLowerCase() === leaveT.split(" ")[0];
      });
    }
    setCurrLeave(temp);
  }, [leaveT, leaves]);
  // console.log(leaveT);
  const id = 23;
  return (
    <div className="dashLeaves">
      {currLeave.length === 0 ? (
        <div>No Leaves taken under this category</div>
      ) : (
        currLeave.map((leave) => (
          <Link
            key={uuidv4()}
            to={`/detailPage/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="l">
              <div className="year">
                {leave.createdAt.toDate().toDateString()}
              </div>
              <div className="leave">
                <div className="leaveDetails">
                  <div className="up">{leave.leavefrom}</div>
                  <div
                    className="down"
                    style={{
                      color: "#5291f0",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {leave.leaveType.split(" ")[0]}
                  </div>
                </div>
                {helper
                  .filter((hel) => hel.status === leave.status)
                  .map((t, i) => (
                    <div
                      key={uuidv4()}
                      className="leaveS"
                      style={{
                        color: `${t.color}`,
                        backgroundColor: `${t.backgroundColor}`,
                      }}
                    >
                      {t.tag}
                    </div>
                  ))}
              </div>
            </div>
          </Link>
        ))
      )}

      {/* <Link
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
              className="leaveS"
              style={{ color: "#34DC0A", backgroundColor: "#EAF4EB" }}
            >
              Approved
            </div>
          </div>
        </div>
      </Link> */}
      {/* <Link
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
              className="leaveS"
              style={{ color: "#DC0A0A", backgroundColor: "#FDDBDB" }}
            >
              Declined
            </div>
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default LeaveCard;
