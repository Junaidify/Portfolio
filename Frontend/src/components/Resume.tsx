import { forwardRef } from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../../public/resume.pdf";

const Resume = forwardRef<HTMLDivElement, object>((_, ref: any) => {
  return (
    <div ref={ref} id="resume">
      <Text
        fontSize={{ base: "2rem", md: "3rem" }}
        m={"3vh 1vw 2vh"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Connect
      </Text>
      <Grid>
        <Box>
          <Text
            fontSize={{ base: "1.5rem", md: "2rem" }}
            m={"1vh 1vw"}
            fontWeight={"bold"}
          >
            Name: <span>Junaid Khan</span>
          </Text>
        </Box>

        <Box
          fontWeight={"bold"}
          display={"flex"}
          alignSelf={"center"}
          ml={"1vw"}
        >
          <Text fontSize={{ base: "1.3rem", md: "1.5rem" }}>Email: </Text>
          <Text fontSize={{ base: "1.1rem", md: "1.3rem" }} m={"1vh 1vw"}>
            junaidkhan23785@gmail.com
            <Button
              className="copy"
              onClick={() =>
                navigator.clipboard.writeText("junaidkhan23785@gmail.com")
              }
              fontSize={"1.1rem"}
              color={"red"}
              m={"0 1vw"}
              bg={"transparent"}
              border={"none"}
            >
              <FontAwesomeIcon icon={faCopy} />
            </Button>
          </Text>
        </Box>

        <Box
          fontWeight={"bold"}
          display={"flex"}
          alignContent={"center"}
          ml={"1vw"}
        >
          <Text fontSize={{ base: "1.2rem", md: "1.5rem" }}>Phone : </Text>
          <Text fontSize={"1.3rem"} m={"0 1vw"}>
            9582870760
            <Button
              className="copy"
              onClick={() => navigator.clipboard.writeText("9582870760")}
              fontSize={"1.1rem"}
              color={"red"}
              m={"0 1vw"}
              bg={"transparent"}
              border={"none"}
            >
              <FontAwesomeIcon icon={faCopy} />
            </Button>
          </Text>
        </Box>

        <Box fontWeight={"bold"} display={"flex"} alignItems={"center"}>
          <Text fontSize={{ base: "1.2rem", md: "1.5rem" }} m={"1vh 1vw"}>
            Location:
          </Text>
          <Text fontSize={{ base: "1.2rem", md: "1.5rem" }}>
            New Delhi, India
          </Text>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap={"2vw"}
          rowGap={"1vh"}
          textAlign={"center"}
          mt={"6vh"}
        >
          <Text
            border={"1px solid white"}
            p={"1vh 1.2vw"}
            bg={"red"}
            fontSize={{ base: "1.1rem", md: "1.5rem" }}
            borderRadius={"10px"}
            color={"white"}
            onClick={() =>
              window.open("https://www.linkedin.com/in/junaidify-khan/")
            }
          >
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </Text>
          <Text
            border={"1px solid white"}
            p={"1vh 1.2vw"}
            bg={"red"}
            fontSize={{ base: "1.1rem", md: "1.3rem" }}
            borderRadius={"10px"}
            color={"white"}
            onClick={() => window.open("https://github.com/junaidify")}
          >
            GitHub <FontAwesomeIcon icon={faGithub} />
          </Text>
          <Text
            border={"1px solid white"}
            p={{ base: "1vh 1.2vw", md: "1vh 1.5vw" }}
            bg={"red"}
            fontSize={{ base: "1.1rem", md: "1.3rem" }}
            borderRadius={"10px"}
            color={"white"}
          >
            <a href={resume} download="resume.pdf">
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </Text>
        </Box>
      </Grid>
    </div>
  );
});

export default Resume;
