import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import FormPage from "./components/FormPage";
import LeaveRequestPage from "./pages/LeaveRequestPage";
import ApplicationDetailPage from "./pages/ApplicationDetailPage";
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [user, setUser] = useState({});
  // useEffect(() => {
  // async function getData() {
  // const arr = [];
  // const init = query(collection(db, "users"));
  // const temp = await getDocs(init);
  // temp.docs.forEach((doc) => {
  //   arr.push({ ...doc.data(), id: doc.id });
  // });
  // setUser(arr[1]);
  useEffect(() => {
    // let Msg = document.getElementById("message");
    const recMsg = (e) => {
      e.preventDefault()
      if (localStorage.getItem("token") && localStorage.getItem('token')!=undefined) return;
      console.log("data", e.data);
      if (!e.data.token) {
        return
      }
      localStorage.setItem("token", e.data.token);
      localStorage.setItem("data", e.data.user);
    };
    window.addEventListener("message", recMsg);
    return () => {
      window.removeEventListener("message", recMsg);
    };
  }, []);

  const data = {
    user: {
      id: "be56e337-1bc8-4ac6-9e8e-79bb04ef0500",
      name: "Test",
      email: "test@gmail.com",
      isStudent: false,
      isFaculty: true,
      gender: "Female",
      address: "ahfdjlsnvlkdshnvb",
      phoneNo: "9927259999",
      dob: "2005-05-30",
      updatedAt: "2023-05-30T15:07:44.819Z",
      createdAt: "2023-05-30T15:07:44.819Z",
    },
    faculty: {
      id: "3331",
      department: "Computer engineering",
      designation: "Professor",
      qualification: "M.Tech",
      UserId: "be56e337-1bc8-4ac6-9e8e-79bb04ef0500",
      updatedAt: "2023-05-30T15:07:45.074Z",
      createdAt: "2023-05-30T15:07:45.074Z",
    },
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYjgyNThhZDAtNTMwYy00MWYzLWJmMjUtOTA1NmJhZDI2YzcwIiwibmFtZSI6IkFuamFsaSBLdWtyZXRpIiwiZW1haWwiOiJhbmphbGlrdWt1MDk4QGdtYWlsLmNvbSIsImlzU3R1ZGVudCI6ZmFsc2UsImlzRmFjdWx0eSI6dHJ1ZSwiZ2VuZGVyIjoiRmVtYWxlIiwiYWRkcmVzcyI6InByYWdhdGkgdmloYXIgYmxvY2sgcm9hZCBjaGFtYmEgdGVocmkgZ2FyaHdhbCIsInBob25lTm8iOiI5OTI3MjUzMDU3IiwiZG9iIjoiMjAwMi0wMi0yMSIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMzBUMTQ6MDY6MzUuNDU4WiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMzBUMTQ6MDY6MzUuNDU4WiJ9LCJmYWN1bHR5Ijp7ImlkIjoiMzQzMiIsImRlcGFydG1lbnQiOiJJbmZvcm1hdGlvbiB0ZWNobm9sb2d5IiwiZGVzaWduYXRpb24iOiJQcm9mZXNzb3IiLCJxdWFsaWZpY2F0aW9uIjoiUGhkIn0sImlhdCI6MTY4NTQ1NTU5N30.WkxfrvUtc96AlVWJNaJ5UxfiIZCS21rcTYYhtZ-1sco";
  // setUser(data);
  // }
  // getData();
  // }, []);
  // console.log(user);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage user={data} />} />
        <Route path="/detailPage/:id" element={<DetailPage user={data} />} />
        <Route path="/form/:formCategory" element={<FormPage user={data} />} />
        <Route
          path="/leaveRequests"
          element={<LeaveRequestPage user={data} />}
        />
        <Route
          path="/leaveRequests/:appId"
          element={<ApplicationDetailPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
