import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailPage.css";

const ApplicationDetailPage = ({ user, token }) => {
  const [leave, setLeave] = useState({});
  const [faculty, setFaculty] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.appId;
  // console.log(id);
  useEffect(() => {
    async function getLeaves() {
      setLoading(true);
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

      const fac = await fetch(
        `http://localhost:8080/faculty/getFaculty/${data.data.FacultyId}`,
        {
          method: "GET",
        }
      );
      const resFac = await fac.json();
      setFaculty(resFac.data);
      setLoading(false);
    }
    getLeaves();
  }, [user, id, token]);

  console.log(faculty);
  const acceptApplicationHandler = async () => {
    const res = await fetch(
      `http://localhost:8080/facultyLeave/approve/${id}`,
      {
        method: "PATCH",
        headers: {
          token: token,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    navigate(-1);
  };
  const rejectApplicationHandler = async () => {
    const res = await fetch(`http://localhost:8080/facultyLeave/reject/${id}`, {
      method: "PATCH",
      headers: {
        token: token,
      },
    });
    const data = await res.json();
    console.log(data);
    navigate(-1);
  };
  return (
    <>
      <Header />
      <div className="detailPage">
        <div className="ahead">Application Details</div>
        {loading ? (
          <>Loading</>
        ) : (
          <>
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
                <div className="ans">{faculty.User.name}</div>
                <div className="ans">{`${faculty.designation}, ${faculty.department}`}</div>
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
          </>
        )}
      </div>
    </>
  );
};

export default ApplicationDetailPage;
