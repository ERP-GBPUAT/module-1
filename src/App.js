import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import FormPage from "./components/FormPage";
import LeaveRequestPage from "./pages/LeaveRequestPage";
import ApplicationDetailPage from "./pages/ApplicationDetailPage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")));
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const recMsg = (e) => {
      e.preventDefault();
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") != undefined
      )
        return;
      console.log("data", e.data);
      if (!e.data.token) {
        return;
      }
      localStorage.setItem("token", e.data.token);
      localStorage.setItem("data", e.data.user);
    };
    window.addEventListener("message", recMsg);
    return () => {
      window.removeEventListener("message", recMsg);
    };
  }, []);

  // const data = {
  //   user: {
  //     id: "be56e337-1bc8-4ac6-9e8e-79bb04ef0500",
  //     name: "Test",
  //     email: "test@gmail.com",
  //     isStudent: false,
  //     isFaculty: true,
  //     gender: "Female",
  //     address: "ahfdjlsnvlkdshnvb",
  //     phoneNo: "9927259999",
  //     dob: "2005-05-30",
  //     updatedAt: "2023-05-30T15:07:44.819Z",
  //     createdAt: "2023-05-30T15:07:44.819Z",
  //   },
  //   faculty: {
  //     id: "3331",
  //     department: "Computer engineering",
  //     designation: "Professor",
  //     qualification: "M.Tech",
  //     UserId: "be56e337-1bc8-4ac6-9e8e-79bb04ef0500",
  //     updatedAt: "2023-05-30T15:07:45.074Z",
  //     createdAt: "2023-05-30T15:07:45.074Z",
  //   },
  // };
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYzU5MjM3NzUtYTYzZS00ZDM5LWFjMjktY2RjYjk2ZTc3MDFhIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlzU3R1ZGVudCI6ZmFsc2UsImlzRmFjdWx0eSI6dHJ1ZSwibmFtZSI6IkFuamFsaSBLdWtyZXRpIiwicGhvbmVObyI6Ijk5MjcyNTMwNTciLCJkb2IiOiIyMDA1LTA3LTIxIiwiYWRkcmVzcyI6InByYWdhdGkgdmloYXIgYmxvY2sgcm9hZCBjaGFtYmEgdGVocmkgZ2FyaHdhbCIsImdlbmRlciI6IkZlbWFsZSIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMzBUMTg6MTk6NTkuNzYxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMzBUMTg6MTk6NTkuNzYxWiJ9LCJmYWN1bHR5Ijp7ImlkIjoiVElUUyIsImRlcGFydG1lbnQiOiJJbmZvcm1hdGlvbiB0ZWNobm9sb2d5IiwiZGVzaWduYXRpb24iOiJQcm9mZXNzb3IiLCJxdWFsaWZpY2F0aW9uIjoiUGhkIiwid2FyZGVuT2ZIb3N0ZWwiOm51bGwsImhvZE9mRGVwYXJ0bWVudCI6bnVsbCwiZGVhbk9mQ29sbGVnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wNS0zMFQxODoyMDowMC4wODlaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0zMFQxODoyMDowMC4wODlaIiwiVXNlcklkIjoiYzU5MjM3NzUtYTYzZS00ZDM5LWFjMjktY2RjYjk2ZTc3MDFhIn0sImlhdCI6MTY4NTQ3MTg2OX0.zLC568AGEBaT6xw9cgUdGVEDsGhtgxVqzit3mLapBFk";
  // setUser(data);
  // }
  // getData();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage user={user} token={token} />} />
        <Route
          path="/detailPage/:id"
          element={<DetailPage user={user} token={token} />}
        />
        <Route
          path="/form/:formCategory"
          element={<FormPage user={user} token={token} />}
        />
        <Route
          path="/leaveRequests"
          element={<LeaveRequestPage user={user} token={token} />}
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
