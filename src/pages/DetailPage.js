import React from "react";
import "./DetailPage.css";
import Header from "../components/Header";

const DetailPage = () => {
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
        <div className="astatus">
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
            {/* <div>On DD/MM/YYYY</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
