import "./App.css";
import { useState, useEffect, useLayoutEffect } from "react";
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
      // if (
      //   localStorage.getItem("token") &&
      //   localStorage.getItem("token") !== undefined
      // )
      //   return;
      console.log("data", e.data);
      if (!e.data.token) {
        return;
      }
      localStorage.setItem("token", e.data.token);
      // setUser(JSON.parse(localStorage.getItem("data")));
      localStorage.setItem("data", e.data.user);
      // setToken(localStorage.getItem("token"));
    };
    window.addEventListener("message", recMsg);
    return () => {
      window.removeEventListener("message", recMsg);
    };
  }, []);
  // setUser(JSON.parse(localStorage.getItem("data")));
  // setUser(localStorage.getItem("token"));

  return (
    <div className="App">
      {!user && !token ? (
        <div>Loading</div>
      ) : (
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
            element={
              <LeaveRequestPage
                user={user}
                token={token}
                isDean={user.faculty.deanOfCollege}
              />
            }
          />
          <Route
            path="/leaveRequests/:appId"
            element={<ApplicationDetailPage user={user} token={token} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
