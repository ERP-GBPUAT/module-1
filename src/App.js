import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import FormPage from "./components/FormPage";
import LeaveRequestPage from "./pages/LeaveRequestPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
        <Route path="/form/:formCategory" element={<FormPage />} />
        <Route path="/leaveRequests" element={<LeaveRequestPage />} />
      </Routes>
    </div>
  );
}

export default App;
