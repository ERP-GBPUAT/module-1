import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailPage.css";

const ApplicationDetailPage = ({ user, token }) => {
  const [leave, setLeave] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const id = params.appId;
  console.log(id);
  useEffect(() => {
    async function getLeaves() {
      const res = await fetch(
        `http://localhost:8080/facultyLeave/getLeaveById/${id}`,
        {
          method: "GET",
          headers: {
            token: token,
          },
        }
      );
      const data = await res.json();
      setLeave(data.data);
    }
    getLeaves();
  }, [user, id, token]);
  console.log(leave);
  const acceptApplicationHandler = () => {
    navigate(-1);
  };
  const rejectApplicationHandler = () => {
    navigate(-1);
  };
  return (
    <>
      <Header />
      <div className="detailPage">
        <div className="ahead">Application Details</div>
        <div className="aform">
          <div className="fleft">
            <div className="qus">Name</div>
            <div className="qus">Designation</div>
            <div className="qus">Leave Type</div>
            <div className="qus">Reason for Leave</div>
            <div className="qus">Outstation permission if required</div>
            <div className="qus">Address during leave period</div>
            <div className="qus">Work Arrangement</div>
            <div className="qus">Leave From</div>
            <div className="qus">Leave Till</div>
          </div>
          <div className="fright">
            <div className="ans">{user.user.name}</div>
            <div className="ans">{user.faculty.designation}</div>
            <div className="ans">{leave.type}</div>
            <div className="ans">{leave.reason}</div>
            <div className="ans">
              {leave.outstationPermission ? "Yes" : " No"}
            </div>
            <div className="ans">{leave.addrDuringLeave}</div>
            <div className="ans">{leave.workArrangement}</div>
            <div className="ans">{leave.startDate}</div>
            <div className="ans">{leave.endDate}</div>
          </div>
        </div>
        <div className="accRej">
          <div className="accept" onClick={acceptApplicationHandler}>
            Accept
          </div>
          <div className="reject" onClick={rejectApplicationHandler}>
            Reject
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationDetailPage;
