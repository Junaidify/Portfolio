import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          margin: "auto",
          backgroundColor: "black",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
