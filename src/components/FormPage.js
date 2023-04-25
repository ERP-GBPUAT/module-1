import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../pages/DetailPage.css";
import Header from "./Header";

const FormPage = () => {
  const params = useParams();
  const { register, handleSubmit } = useForm();
  const leaveType = params.formCategory;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className="detailPage">
        <div className="ahead">{leaveType} Application</div>
        <div className="aformS">
          <div className="formS">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="ans"
                  {...register("name")}
                />
              </div>
              <div>
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  className="ans"
                  {...register("designation")}
                />
              </div>
              <div>
                <label>Reason for Leave</label>
                <input
                  type="text"
                  name="reason"
                  className="ans"
                  {...register("reason")}
                />
              </div>
              <div>
                <label>Outstation permission if required</label>
                <input
                  type="text"
                  name="outstation permission"
                  className="ans"
                  {...register("outstaion permission")}
                />
              </div>
              <div>
                <label> Address during leave period</label>
                <input
                  type="text"
                  name="address"
                  className="ans"
                  {...register("address")}
                />
              </div>
              <div>
                <label>Work Arrangement</label>
                <input
                  type="text"
                  name="work arrangement"
                  className="ans"
                  {...register("work arrangement")}
                />
              </div>
              <div>
                <label>Leave From</label>
                <input
                  type="date"
                  name="leave from"
                  className="ans"
                  {...register("leave from")}
                />
              </div>
              <div>
                <label>Leave Till</label>
                <input
                  type="date"
                  name="leave till"
                  className="ans"
                  {...register("leave till")}
                />
              </div>
              <div>
                <label>Leave for(in days)</label>
                <input
                  type="number"
                  name="number of leave days"
                  className="ans"
                  {...register("number of leave days")}
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
      </div>
    </>
  );
};

export default FormPage;
