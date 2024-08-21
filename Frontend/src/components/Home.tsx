import { forwardRef } from "react";
import { Button, Text, Image } from "@chakra-ui/react";
import "../styles/style.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile_img from "../images/profile-pic.png";
import resume from "../../public/resume.pdf";

interface HomePropType {
  textColor: string;
}

const Home = forwardRef<HTMLDivElement, HomePropType>((props, ref: any) => {
  return (
    <div
      ref={ref}
      style={{
        width: "80%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <main id="main">
        <div className="home_intro_wrapper">
          <Text mt={"15vh"} ml={"2vw"} className="heading">
            WELCOME TO MY WORLD
          </Text>
          <Text ml={"2vw"} className="intro" fontWeight={"bold"}>
            <span style={{ color: "red" }}>HI,</span>{" "}
            <span style={{ fontSize: "3rem" }}>I'M JUNAID KHAN</span>
          </Text>
          <Text
            className="bio"
            fontSize={{ base: "1.1rem", md: "1.3rem" }}
            mt={"1vh"}
            ml={"2vw"}
          >
            {" "}
            A FRONTEND WEB DEVELOPER
          </Text>
          <Text
            className="home_bio"
            ml={"2vw"}
            mt={"3vh"}
            lineHeight={{ base: "1.5rem", md: "2rem" }}
            fontSize={{ base: "1rem", md: "1.1rem" }}
          >
            I’m a frontend web developer with expertise in HTML, CSS,
            JavaScript, Typescript, ReactJS, and Redux. I excel in using
            Tailwind CSS, Chakra UI, and Bootstrap to build responsive,
            user-friendly interfaces. With a solid background in Java and a
            focus on modern web technologies, I deliver efficient and innovative
            web solutions.
          </Text>
          <Button mt={"8vh"} ml={"2vw"} bg={"red"} color={"white"}>
            <a href={resume} download="resume.pdf">
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </Button>
        </div>
        <div className="main_img_wrapper">
          <p id="profile_img">
            <Image w={"100%"} h={"100%"} src={profile_img} alt="profile_img" />
          </p>
        </div>
      </main>
    </div>
  );
});

export default Home;
