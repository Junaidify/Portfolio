import { Grid, Text } from "@chakra-ui/react";
import {} from "react";
import "../styles/navbar.css";

export const Skills = () => {
  return (
    <div id="skills">
      <Text
        fontSize={"3rem"}
        color={"white"}
        m={"5vh 1vw 0 0"}
        fontWeight={"bold"}
      >
        Skills
      </Text>
      <Grid
        templateColumns="repeat(5, 1fr)"
        color={"white"}
        mt={"5vh"}
        rowGap={"5vh"}
        columnGap={"5vw"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          HTML
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          CSS
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          JavaScript
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          TypeScript
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          React
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Redux
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Redux Toolkit
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Tailwind
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Chakra UI
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Bootstrap
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          SASS
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Java
        </Text>
        <Text
          className="skills_box"
          textAlign={"center"}
          p={"0.8vh 1vw"}
          fontSize={"xl"}
          borderRadius={"20px"}
        >
          Git
        </Text>
      </Grid>
    </div>
  );
};
