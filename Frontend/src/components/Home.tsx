import {} from "react";
import { Button, Text } from "@chakra-ui/react";
import "../styles/style.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <nav id="navbar">
        <h1>
          <span className="logo">J</span> {"  "}
          Junaid<span className="name_logo">ify</span>
        </h1>

        <div>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"red"}>
            {" "}
            Home
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            Portfolio
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            About
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            Contact
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {" "}
            Blog
          </Text>
        </div>
        <Button fontSize={"2xl"}>theme</Button>
        <Button fontSize={"2xl"} className="hire_me">
          Hire me
        </Button>
      </nav>
      <main id="main">
        <div>
          <Text color={"white"} mt={"15vh"} ml={"2vw"} className="heading">
            WELCOME TO MY WORLD
          </Text>

          <Text color={"white"} ml={"2vw"} className="intro">
            <span style={{ color: "red" }}>HI,</span> I'M JUNAID KHAN
          </Text>
          <Text color={"white"} className="bio">
            {" "}
            A FRONTEND WEB DEVELOPER
          </Text>
          <Text
            color={"white"}
            w={"80%"}
            ml={"2vw"}
            mt={"9vh"}
            lineHeight={"2.7vh"}
            fontSize={"1.1rem"}
          >
            I’m a frontend web developer with expertise in HTML, CSS,
            JavaScript, Typescript, ReactJS, and Redux. I excel in using
            Tailwind CSS, Chakra UI, and Bootstrap to build responsive,
            user-friendly interfaces. With a solid background in Java and a
            focus on modern web technologies, I deliver efficient and innovative
            web solutions.
          </Text>

          <Button
            mt={"8vh"}
            ml={"2vw"}
            bg={"red"}
            color={"white"}
            className="hire_me"
          >
            Portfolio{" "}
            <span style={{ marginLeft: "0.3vw", transform: "rotate(-40deg)" }}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Button>
        </div>
        <div id="main_div">
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
