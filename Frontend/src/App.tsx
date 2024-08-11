import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/style.css";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Button, Text } from "@chakra-ui/react";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Feedback } from "./components/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAffiliatetheme } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "0 auto ",
          backgroundColor: currentColor === true ? "white" : "black",
        }}
      >
        <div id="navbar_wrapper">
          <nav id="navbar" style={{ backgroundColor: currentColor ? "white" : "black" }}>
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              fontStyle={"italic"}
              color={"white"}
            >
              <NavLink to="/">
                <span className="logo">J</span>
                <span style={{ color: currentColor ? "black" : "white"}}>Junaid</span><span className="name_logo">ify</span>
              </NavLink>
            </Text>

            <div>
              <Text fontWeight={"bold"} color={"red"}>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : currentColor ? "black" : "white" };
                  }}
                >
                  Home
                </NavLink>
              </Text>
              <Text fontWeight={"bold"}>
                <NavLink
                  to="/portfolio"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : currentColor ? "black" : "white" };
                  }}
                >
                  Portfolio
                </NavLink>
              </Text>
              <Text fontWeight={"bold"}>
                <NavLink
                  to="/skills"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" :  currentColor ? "black" : "white" };
                  }}
                >
                  Skills
                </NavLink>
              </Text>
              <Text fontWeight={"bold"}>
                <NavLink
                  to="/resume/connect"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" :  currentColor ? "black" : "white" };
                  }}
                >
                  Resume/Connect
                </NavLink>
              </Text>
              <Text fontWeight={"bold"}>
                <NavLink
                  to="/feedback"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" :  currentColor ? "black" : "white" };
                  }}
                >
                  Feedback
                </NavLink>
              </Text>
            </div>

            <Button
              className="hire_me"
              color={currentColor ? "white" : "black"}   
              bg={currentColor ? "black" : "white"}           
              onClick={() => setCurrentColor((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faAffiliatetheme} />
            </Button>
          </nav>
        </div>

        <Routes>
          <Route
            path="/"
            element={<Home textColor={currentColor ? "black" : "white"} />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio textColor={currentColor ? "black" : "white"} />}
          />
          <Route
            path="/skills"
            element={<Skills textColor={currentColor ? "black" : "white"} />}
          />
          <Route
            path="/resume/connect"
            element={<Resume textColor={currentColor ? "black" : "white"} />}
          />
          <Route
            path="/feedback"
            element={<Feedback textColor={currentColor ? "black" : "white"} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
