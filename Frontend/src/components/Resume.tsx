import { forwardRef } from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";

export const Resume = forwardRef(
  ({ textColor }: { textColor: string }, ref: any) => {
    return (
      <div ref={ref} id="resume">
        <Text
          fontSize={"3rem"}
          color={textColor}
          m={"5vh 1vw 0 0"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Connect
        </Text>
        <Grid>
          <Box>
            <Text
              fontSize={"1.5rem"}
              color={textColor}
              m={"1vh 1vw"}
              fontWeight={"bold"}
            >
              Name: <span>Junaid Khan</span>
            </Text>
          </Box>

          <Box
            color={textColor}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            ml={"1vw"}
          >
            <Text fontSize={"1.5rem"}>Email: </Text>
            <Text fontSize={"1.3rem"} m={"1vh 1vw"}>
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
            color={textColor}
            fontWeight={"bold"}
            display={"flex"}
            alignContent={"center"}
            ml={"1vw"}
          >
            <Text fontSize={"1.5rem"}>Phone : </Text>
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

          <Box
            color={textColor}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
          >
            <Text fontSize={"1.5rem"} m={"1vh 1vw"}>
              Location:
            </Text>
            <Text fontSize={"1.2rem"}>New Delhi, India</Text>
          </Box>

          <Box
            color={textColor}
            display={"flex"}
            alignItems={"center"}
            columnGap={"2vw"}
            ml={"1vw"}
            mt={"6vh"}
          >
            <Text
              border={"1px solid white"}
              p={"1vh 1.2vw"}
              bg={"red"}
              fontSize={"1.2rem"}
              borderRadius={"10px"}
              fontWeight={textColor === "black" ? "bold" : "normal"}
              onClick={() =>
                window.open("https://www.linkedin.com/in/junaidkhan23785/")
              }
            >
              LinkedIn{" "}
            </Text>
            <Text
              border={"1px solid white"}
              p={"1vh 1.2vw"}
              bg={"red"}
              fontSize={"1.2rem"}
              borderRadius={"10px"}
              fontWeight={textColor === "black" ? "bold" : "normal"}
              onClick={() => window.open("https://github.com/junaidify")}
            >
              GitHub
            </Text>
            <Text
              border={"1px solid white"}
              p={"1vh 1.2vw"}
              bg={"red"}
              fontSize={"1.2rem"}
              borderRadius={"10px"}
              fontWeight={textColor === "black" ? "bold" : "normal"}
            >
              <a href="../images/resume.pdf" download>
                Resume <FontAwesomeIcon icon={faDownload} />
              </a>
            </Text>
          </Box>
        </Grid>
      </div>
    );
  }
);
