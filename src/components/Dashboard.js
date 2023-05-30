import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import LeaveCard from "./LeaveCard";
import Modal from "./Modal";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = ({ user }) => {
  const [leaves, setLeaves] = useState([]);
  // console.log(user);
  const currentUserType = user.type;
  useEffect(() => {
    async function getLeaves() {
      // const arr = [];
      // const init = query(
      //   collection(db, "Leaves"),
      //   orderBy("createdAt", "desc"),
      //   where("uid", "==", `${user.id}`)
      // );
      // const res = await getDocs(init);
      // res.docs.forEach((doc) => {
      //   arr.push({ ...doc.data() });
      // });
      const res = await fetch(
        "http://localhost:8080/facultyLeave/getFacultyLeaves",
        {
          method: "GET",
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYjgyNThhZDAtNTMwYy00MWYzLWJmMjUtOTA1NmJhZDI2YzcwIiwibmFtZSI6IkFuamFsaSBLdWtyZXRpIiwiZW1haWwiOiJhbmphbGlrdWt1MDk4QGdtYWlsLmNvbSIsImlzU3R1ZGVudCI6ZmFsc2UsImlzRmFjdWx0eSI6dHJ1ZSwiZ2VuZGVyIjoiRmVtYWxlIiwiYWRkcmVzcyI6InByYWdhdGkgdmloYXIgYmxvY2sgcm9hZCBjaGFtYmEgdGVocmkgZ2FyaHdhbCIsInBob25lTm8iOiI5OTI3MjUzMDU3IiwiZG9iIjoiMjAwMi0wMi0yMSIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMzBUMTQ6MDY6MzUuNDU4WiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMzBUMTQ6MDY6MzUuNDU4WiJ9LCJmYWN1bHR5Ijp7ImlkIjoiMzQzMiIsImRlcGFydG1lbnQiOiJJbmZvcm1hdGlvbiB0ZWNobm9sb2d5IiwiZGVzaWduYXRpb24iOiJQcm9mZXNzb3IiLCJxdWFsaWZpY2F0aW9uIjoiUGhkIn0sImlhdCI6MTY4NTQ1NTU5N30.WkxfrvUtc96AlVWJNaJ5UxfiIZCS21rcTYYhtZ-1sco",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      // setLeaves(arr);y
    }
    getLeaves();
  }, [user]);
  // console.log(leaves);

  const [modal, setModal] = useState(false);
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
            <div className="count">10</div>
          </div>
          <div className="remaining in">
            <div className="leaveH">Remaining</div>
            <div className="count">40</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
