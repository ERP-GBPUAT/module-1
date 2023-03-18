import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
