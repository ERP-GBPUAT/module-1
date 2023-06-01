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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const recMsg = (e) => {
      e.preventDefault();
      // console.log("data", e.data);
      if (!e.data.token) {
        return;
      }
      localStorage.setItem("token", e.data.token);
      setToken(localStorage.getItem("token"));
      localStorage.setItem("data", e.data.user);
      setUser(JSON.parse(localStorage.getItem("data")));
    };
    window.addEventListener("message", recMsg);
    setLoading(false);
    return () => {
      window.removeEventListener("message", recMsg);
    };
  }, []);
  console.log(user);

  return (
    <div className="App">
      {loading || (!user && !token) ? (
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
