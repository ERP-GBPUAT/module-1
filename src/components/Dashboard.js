import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import LeaveCard from "./LeaveCard";
import Modal from "./Modal";
const Dashboard = ({ user, token }) => {
  const [leaves, setLeaves] = useState([]);
  const [modal, setModal] = useState(false);
  const currentUserType = user.type;
  useEffect(() => {
    async function getLeaves() {
      const res = await fetch(
        "http://localhost:8080/facultyLeave/getFacultyLeaves",
        {
          method: "GET",
          headers: {
            token: token,
          },
        }
      );
      const data = await res.json();
      // console.log(data);
      setLeaves(data.data);
    }
    getLeaves();
  }, [user]);
  // console.log(leaves);

  const catArr = [
    "casual",
    "earned",
    "medical",
    "official duty",
    "outstation",
    "others",
  ];

  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className="dashboard">
        <div className="dashHeader">
          <div></div>
          <div>{currentUserType} Dashboard</div>
          <div className="addBtn" onClick={showModal}>
            +
          </div>
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
            <Route path="/" element={<LeaveCard leaves={leaves} />} />
            <Route path="/:lcategory" element={<LeaveCard leaves={leaves} />} />
          </Routes>
        </div>
        <div className="dashFooter">
          <div className="totalLeaves in">
            <div className="leaveH">Total Leaves</div>
            <div className="count">50</div>
          </div>
          <div className="taken in">
            <div className="leaveH">Leaves Taken</div>
            <div className="count">{leaves.length}</div>
          </div>
          <div className="remaining in">
            <div className="leaveH">Remaining</div>
            <div className="count">{50 - leaves.length}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
