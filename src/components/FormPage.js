import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../pages/DetailPage.css";
import Header from "./Header";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const FormPage = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const leaveType = params.formCategory;
  console.log(leaveType);
  const onSubmit = async (data) => {
    console.log(data);
    const id = uuidv4();
    const finalData = {
      ...data,
      // id: id,
      // uid: user.id,
      // status: 0,
      type: leaveType,
      // createdAt: serverTimestamp(),
    };
    console.log(finalData);
    // await setDoc(doc(db, `Leaves/${id}`), finalData);
    try {
      const res = await fetch("http://localhost:8080/facultyLeave/apply", {
        method: "POST",
        body: JSON.stringify(finalData),
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYjgyNThhZDAtNTMwYy00MWYzLWJmMjUtOTA1NmJhZDI2YzcwIiwibmFtZSI6IkFuamFsaSBLdWtyZXRpIiwiZW1haWwiOiJhbmphbGlrdWt1MDk4QGdtYWlsLmNvbSIsImlzU3R1ZGVudCI6ZmFsc2UsImlzRmFjdWx0eSI6dHJ1ZSwiZ2VuZGVyIjoiRmVtYWxlIiwiYWRkcmVzcyI6InByYWdhdGkgdmloYXIgYmxvY2sgcm9hZCBjaGFtYmEgdGVocmkgZ2FyaHdhbCIsInBob25lTm8iOiI5OTI3MjUzMDU3IiwiZG9iIjoiMjAwMi0wMi0yMSIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMzBUMTQ6MDY6MzUuNDU4WiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMzBUMTQ6MDY6MzUuNDU4WiJ9LCJmYWN1bHR5Ijp7ImlkIjoiMzQzMiIsImRlcGFydG1lbnQiOiJJbmZvcm1hdGlvbiB0ZWNobm9sb2d5IiwiZGVzaWduYXRpb24iOiJQcm9mZXNzb3IiLCJxdWFsaWZpY2F0aW9uIjoiUGhkIn0sImlhdCI6MTY4NTQ1NTU5N30.WkxfrvUtc96AlVWJNaJ5UxfiIZCS21rcTYYhtZ-1sco",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="detailPage">
        <div className="ahead">{leaveType} Application</div>
        {leaveType === "Others" ? (
          <div className="aformS">
            <div className="formS">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.user.name}
                    className="ans"
                    {...register("name", { required: true })}
                  />
                </div>
                <div>
                  <label>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={user.faculty.designation}
                    className="ans"
                    {...register("designation", { required: true })}
                  />
                </div> */}
                <div>
                  <label>Reason for Leave</label>
                  <input
                    type="text"
                    name="reason"
                    className="ans"
                    {...register("reason", { required: true })}
                  />
                </div>
                <div>
                  <label>Leave From</label>
                  <input
                    type="date"
                    name="startDate"
                    className="ans"
                    {...register("startDate", { required: true })}
                  />
                </div>
                <div>
                  <label>Leave Till</label>
                  <input
                    type="date"
                    name="endDate"
                    className="ans"
                    {...register("endDate", { required: true })}
                  />
                </div>
                <div>
                  <label>Application</label>
                  <input
                    type="file"
                    name="application"
                    className="ans"
                    {...register("reason", { required: true })}
                  />
                </div>
                <div>
                  <label>Remarks</label>
                  <input
                    type="text"
                    name="remarks"
                    className="ans"
                    {...register("remarks", { required: true })}
                  />
                </div>
                <div className="submitCont">
                  <button type="submit" className="submit">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="aformS">
            <div className="formS">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Reason for Leave</label>
                  <input
                    type="text"
                    name="reason"
                    className="ans"
                    {...register("reason", { required: true })}
                  />
                </div>
                <div>
                  <label>Outstation permission if required</label>
                  <select
                    className="ans"
                    name="outstationpermission"
                    {...register("outstaionpermission")}
                    defaultValue={"No"}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label> Address during leave period</label>
                  <input
                    type="text"
                    name="addrDuringLeave"
                    className="ans"
                    {...register("addrDuringLeave", { required: true })}
                  />
                </div>
                <div>
                  <label>Work Arrangement</label>
                  <input
                    type="text"
                    name="workArrangement"
                    className="ans"
                    {...register("workArrangement", { required: true })}
                  />
                </div>
                <div>
                  <label>Leave From</label>
                  <input
                    type="date"
                    name="startDate"
                    className="ans"
                    {...register("startDate", { required: true })}
                  />
                </div>
                <div>
                  <label>Leave Till</label>
                  <input
                    type="date"
                    name="endDate"
                    className="ans"
                    {...register("endDate", { required: true })}
                  />
                </div>
                {/* <div>
                  <label>Leave for(in days)</label>
                  <input
                    type="number"
                    name="numberofleavedays"
                    className="ans"
                    {...register("numberofleavedays", { required: true })}
                  />
                </div> */}
                <div>
                  <label>Remarks</label>
                  <input
                    type="text"
                    name="remarks"
                    className="ans"
                    {...register("remarks", { required: true })}
                  />
                </div>
                <div className="submitCont">
                  <button type="submit" className="submit">
                    Submit Application
                  </button>
                </div>
                {/* <div>
              <label>Number of C.L due</label>
              <input
                type="text"
                name="cl due"
                className="ans"
                {...register("cl due")}
              />
            </div>
            <div>
            <label></label>
              <input
                type="text"
                name="name"
                className="ans"
                {...register("name")}
              />
            </div> */}
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormPage;
