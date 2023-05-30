import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import Header from "../components/Header";
// import { dummyFaculty } from "../dummyData/dummyfaculty";

const DetailPage = ({ user }) => {
  const [leave, setLeave] = useState({});
  // const currentUser = dummyFaculty[0];
  // const currentUserType = currentUser.type;
  const params = useParams();
  const id = params.id;
  console.log(id);
  useEffect(() => {
    async function getLeaves() {
      const res = await fetch(
        `http://localhost:8080/facultyLeave/getLeaveById/${id}`,
        {
          method: "GET",
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYzU5MjM3NzUtYTYzZS00ZDM5LWFjMjktY2RjYjk2ZTc3MDFhIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlzU3R1ZGVudCI6ZmFsc2UsImlzRmFjdWx0eSI6dHJ1ZSwibmFtZSI6IkFuamFsaSBLdWtyZXRpIiwicGhvbmVObyI6Ijk5MjcyNTMwNTciLCJkb2IiOiIyMDA1LTA3LTIxIiwiYWRkcmVzcyI6InByYWdhdGkgdmloYXIgYmxvY2sgcm9hZCBjaGFtYmEgdGVocmkgZ2FyaHdhbCIsImdlbmRlciI6IkZlbWFsZSIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMzBUMTg6MTk6NTkuNzYxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMzBUMTg6MTk6NTkuNzYxWiJ9LCJmYWN1bHR5Ijp7ImlkIjoiVElUUyIsImRlcGFydG1lbnQiOiJJbmZvcm1hdGlvbiB0ZWNobm9sb2d5IiwiZGVzaWduYXRpb24iOiJQcm9mZXNzb3IiLCJxdWFsaWZpY2F0aW9uIjoiUGhkIiwid2FyZGVuT2ZIb3N0ZWwiOm51bGwsImhvZE9mRGVwYXJ0bWVudCI6bnVsbCwiZGVhbk9mQ29sbGVnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wNS0zMFQxODoyMDowMC4wODlaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0zMFQxODoyMDowMC4wODlaIiwiVXNlcklkIjoiYzU5MjM3NzUtYTYzZS00ZDM5LWFjMjktY2RjYjk2ZTc3MDFhIn0sImlhdCI6MTY4NTQ3MTg2OX0.zLC568AGEBaT6xw9cgUdGVEDsGhtgxVqzit3mLapBFk",
          },
        }
      );
      const data = await res.json();
      setLeave(data.data);
    }
    getLeaves();
  }, [user, id]);
  console.log(leave);
  return (
    <>
      <Header />
      <div className="detailPage">
        <div className="ahead">Application Details</div>
        <div className="aform">
          <div className="fleft">
            <div className="qus">Name</div>
            <div className="qus">Designation</div>
            <div className="qus">Reason for Leave</div>
            <div className="qus">Outstation permission if required</div>
            <div className="qus">Address during leave period</div>
            <div className="qus">Work Arrangement</div>
            <div className="qus">Leave From</div>
            <div className="qus">Leave Till</div>
            {/* <div className="qus">C.L for</div>
            <div className="qus">Number of C.L due</div>
            <div className="qus">Balance C.L</div> */}
          </div>
          <div className="fright">
            <div className="ans">{user.user.name}</div>
            <div className="ans">{user.faculty.designation}</div>
            <div className="ans">{leave.reason}</div>
            <div className="ans">{leave.outstationpermission}</div>
            <div className="ans">{leave.addrDuringLeave}</div>
            <div className="ans">{leave.workArrangement}</div>
            <div className="ans">{leave.startDate}</div>
            <div className="ans">{leave.endDate}</div>
            {/* <div className="ans">Ans</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div> */}
          </div>
        </div>
        <div className="astatus">
          {user.faculty.designation
            .toLowerCase()
            .split(" ")
            .includes("professor") && (
            <div className="appr1 ain">
              <div>Head of the Department</div>
              <div
                className="astat"
                style={{
                  borderColor: "rgba(52, 220, 10, 0.7)",
                  color: "rgba(52, 220, 10, 0.7)",
                }}
              >
                Approved
              </div>
              <div>On DD/MM/YYYY</div>
            </div>
          )}
          <div className="appr2 ain">
            <div>Dean</div>
            <div
              className="astat"
              style={{
                borderColor: "red",
                color: "red",
              }}
            >
              Pending
            </div>
            <div>On DD/MM/YYYY</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
