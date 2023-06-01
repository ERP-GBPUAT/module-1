import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDownloadURL } from "firebase/storage";
import "./DetailPage.css";
import Header from "../components/Header";
import { ref } from "firebase/storage";
import { storage } from "../firebase";

const DetailPage = ({ user, token }) => {
  const [leave, setLeave] = useState({});
  const [imgLink, setImgLink] = useState(null);
  const params = useParams();
  const id = params.id;
  // console.log(id);
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
      if (data.data.type === "Others") {
        const imgRef = ref(storage, `images/${user.user.id}${data.data.id}`);
        const url = await getDownloadURL(imgRef);
        setImgLink(url);
        console.log(url);
      }
    }
    getLeaves();
  }, [user, id, token]);
  console.log(leave);
  return (
    <>
      <Header />
      <div className="detailPage">
        <div className="ahead">Application Details</div>
        {leave.type === "Others" ? (
          <div className="aform">
            <div className="fleft">
              <div className="qus">Name</div>
              <div className="qus">Designation</div>
              <div className="qus">Reason for Leave</div>
              <div className="qus">Leave From</div>
              <div className="qus">Leave Till</div>
              <div className="qus">Application</div>
            </div>
            <div className="fright">
              <div className="ans">{user.user.name}</div>
              <div className="ans">{user.faculty.designation}</div>
              <div className="ans">{leave.reason}</div>
              <div className="ans">{leave.startDate}</div>
              <div className="ans">{leave.endDate}</div>
              <div className="ans">
                {!imgLink ? (
                  <div>Loading</div>
                ) : (
                  <img src={imgLink} style={{ width: "50vw" }} alt="app" />
                )}
              </div>
            </div>
          </div>
        ) : (
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
                {leave.outstationPermission ? "Yes" : "No"}
              </div>
              <div className="ans">{leave.addrDuringLeave}</div>
              <div className="ans">{leave.workArrangement}</div>
              <div className="ans">{leave.startDate}</div>
              <div className="ans">{leave.endDate}</div>
            </div>
          </div>
        )}
        <div className="astatus">
          {user.faculty.designation
            .toLowerCase()
            .split(" ")
            .includes("professor") && (
            <div className="appr1 ain">
              <div>Head of the Department</div>
              {leave.status === 1 || leave.status === 2 ? (
                <div
                  style={{
                    color: "#34DC0A",
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  Approved
                </div>
              ) : leave.status < 0 ? (
                <div
                  style={{
                    color: "#DC0A0A",
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  Rejected
                </div>
              ) : (
                <div
                  style={{
                    color: "#fad517",
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  Pending
                </div>
              )}
            </div>
          )}
          <div className="appr2 ain">
            <div>Dean</div>
            {leave.status === 2 ? (
              <div
                style={{
                  color: "#34DC0A",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                Approved
              </div>
            ) : leave.status < 0 ? (
              <div
                style={{
                  color: "#DC0A0A",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                Rejected
              </div>
            ) : (
              <div
                style={{
                  color: "#fad517",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
                Pending
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
