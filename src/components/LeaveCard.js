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
    {
      status: -2,
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
        return l.type.split(" ")[0].toLowerCase() === leaveT.split(" ")[0];
      });
    }
    setCurrLeave(temp);
  }, [leaveT, leaves]);
  console.log(currLeave);
  // const id = 23;
  return (
    <div className="dashLeaves">
      {currLeave.length === 0 ? (
        <span className="noLeaves">No Leaves taken under this category</span>
      ) : (
        currLeave.map((leave) => (
          <Link
            leave={leave}
            key={uuidv4()}
            to={`/detailPage/${leave.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="l">
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
    </div>
  );
};

export default LeaveCard;
