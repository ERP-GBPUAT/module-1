import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./DetailPage.css";

const ApplicationDetailPage = () => {
  const navigate = useNavigate();
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
            <div className="qus">Reason for Leave</div>
            <div className="qus">Outstation permission if required</div>
            <div className="qus">Address during leave period</div>
            <div className="qus">Work Arrangement</div>
            <div className="qus">Leave From</div>
            <div className="qus">Leave Till</div>
            <div className="qus">C.L for</div>
            <div className="qus">Number of C.L due</div>
            <div className="qus">Balance C.L</div>
          </div>
          <div className="fright">
            <div className="ans">Ans</div>
            <div className="ans">Ans khfgkl,j</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div>
            <div className="ans">Ansg iyihufcsdgerglkfjbgviufd</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div>
            <div className="ans">Ans</div>
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
