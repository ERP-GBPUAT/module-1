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
      type: leaveType,
    };
    console.log(finalData);
    try {
      const res = await fetch("http://localhost:8080/facultyLeave/apply", {
        method: "POST",
        body: JSON.stringify({ ...finalData, file: finalData.fileDocument }),
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYzU5MjM3NzUtYTYzZS00ZDM5LWFjMjktY2RjYjk2ZTc3MDFhIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlzU3R1ZGVudCI6ZmFsc2UsImlzRmFjdWx0eSI6dHJ1ZSwibmFtZSI6IkFuamFsaSBLdWtyZXRpIiwicGhvbmVObyI6Ijk5MjcyNTMwNTciLCJkb2IiOiIyMDA1LTA3LTIxIiwiYWRkcmVzcyI6InByYWdhdGkgdmloYXIgYmxvY2sgcm9hZCBjaGFtYmEgdGVocmkgZ2FyaHdhbCIsImdlbmRlciI6IkZlbWFsZSIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMzBUMTg6MTk6NTkuNzYxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMzBUMTg6MTk6NTkuNzYxWiJ9LCJmYWN1bHR5Ijp7ImlkIjoiVElUUyIsImRlcGFydG1lbnQiOiJJbmZvcm1hdGlvbiB0ZWNobm9sb2d5IiwiZGVzaWduYXRpb24iOiJQcm9mZXNzb3IiLCJxdWFsaWZpY2F0aW9uIjoiUGhkIiwid2FyZGVuT2ZIb3N0ZWwiOm51bGwsImhvZE9mRGVwYXJ0bWVudCI6bnVsbCwiZGVhbk9mQ29sbGVnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wNS0zMFQxODoyMDowMC4wODlaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0zMFQxODoyMDowMC4wODlaIiwiVXNlcklkIjoiYzU5MjM3NzUtYTYzZS00ZDM5LWFjMjktY2RjYjk2ZTc3MDFhIn0sImlhdCI6MTY4NTQ3MTg2OX0.zLC568AGEBaT6xw9cgUdGVEDsGhtgxVqzit3mLapBFk",
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
                    name="fileDocument"
                    className="ans"
                    {...register("fileDocument", { required: true })}
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
                    {...register("outstationpermission")}
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
