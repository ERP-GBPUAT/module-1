import React from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const catArr = [
    "casual",
    "earned",
    "medical",
    "official duty",
    "outstation",
    "others",
  ];
  return (
    <div className="dashboard">
      <div className="dashHeader">
        <div></div>
        <div>Faculty Dashboard</div>
        <div className="addBtn">+</div>
      </div>
      <div className="dashBody">
        <div className="dbH">Leaves Applied</div>
        <div className="dashRouters">
          <NavLink
            style={{ width: "100%", textAlign: "center" }}
            to="/"
            className={(navdata) => (navdata.isActive ? "activeL" : "link")}
          >
            <div className="cat"> All</div>
          </NavLink>
          {catArr.map((cat) => (
            <NavLink
              style={{ width: "100%", textAlign: "center" }}
              key={uuid()}
              to={`/${cat}`}
              className={(navdata) => (navdata.isActive ? "activeL" : "link")}
            >
              <div className="cat">{cat}</div>
            </NavLink>
          ))}
        </div>
        <div className="dashLeaves">
          <div className="l">
            <div className="year">January, 2023</div>
            <div className="leave">
              <div className="leaveDetails">
                <div className="up">Monday, 29 Jan</div>
                <div className="down">Casual</div>
              </div>
              <div className="leaveStatus">Pending</div>
            </div>
          </div>
          <div className="l">
            <div className="year">January, 2023</div>
            <div className="leave">
              <div className="leaveDetails">
                <div className="up">Monday, 29 Jan</div>
                <div className="down">Casual</div>
              </div>
              <div className="leaveStatus">Pending</div>
            </div>
          </div>
          <div className="l">
            <div className="year">January, 2023</div>
            <div className="leave">
              <div className="leaveDetails">
                <div className="up">Monday, 29 Jan</div>
                <div className="down">Casual</div>
              </div>
              <div className="leaveStatus">Pending</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashFooter">
        <div className="totalLeaves in">
          <div className="leaveH">Total Leaves</div>
          <div className="count">50</div>
        </div>
        <div className="taken in">
          <div className="leaveH">Leaves Taken</div>
          <div className="count">10</div>
        </div>
        <div className="remaining in">
          <div className="leaveH">Remaining</div>
          <div className="count">40</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
