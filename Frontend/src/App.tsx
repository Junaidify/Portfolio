import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/style.css";
import Home from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Button, Text } from "@chakra-ui/react";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Feedback } from "./components/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAffiliatetheme } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "0 auto ",
          backgroundColor: "black",
        }}
      >
        <div id="navbar_wrapper">
          <nav id="navbar">
            <Text fontSize={"2xl"} fontWeight={"bold"} fontStyle={"italic"} color={"white"}>
              <span  className="logo">J</span> {"   "}
              Junaid<span className="name_logo">ify</span>
            </Text>

            <div>
              <Text  fontWeight={"bold"} color={"red"}>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "white" };
                  }}
                >
                  Home
                </NavLink>
              </Text>
              <Text  fontWeight={"bold"}>
                <NavLink
                  to="/portfolio"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "white" };
                  }}
                >
                  Portfolio
                </NavLink>
              </Text>
              <Text  fontWeight={"bold"}>
                <NavLink
                  to="/skills"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "white" };
                  }}
                >
                  Skills
                </NavLink>
              </Text>
              <Text  fontWeight={"bold"}>
                <NavLink
                  to="/resume/connect"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "white" };
                  }}
                >
                  Resume/Connect
                </NavLink>
              </Text>
              <Text  fontWeight={"bold"}>
                <NavLink
                  to="/feedback"
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "white" };
                  }}
                >
                  Feedback
                </NavLink>
              </Text>
            </div>

            <Button className="hire_me">
            <FontAwesomeIcon icon={faAffiliatetheme} />
            </Button>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume/connect" element={<Resume />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
