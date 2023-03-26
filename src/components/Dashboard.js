import React from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import LeaveCard from "./LeaveCard";

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
        <Routes>
          <Route path="/" element={<LeaveCard />} />
          <Route path="/:lcategory" element={<LeaveCard />} />
        </Routes>
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
