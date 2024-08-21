import { Grid, GridItem, Text } from "@chakra-ui/react";
import "../styles/navbar.css";
import { StarIcons } from "./StarIcons";
import { forwardRef } from "react";

interface SkillItem {
  textColor: string;
}

const Skills = forwardRef<HTMLDivElement, SkillItem>((props, ref) => {
  return (
    <div id="skills" ref={ref}>
      <Text
        fontSize={"3rem"}
        m={"5vh 1vw 0 0"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Skills
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        rowGap={"5vh"}
        columnGap={"5vw"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"90%"}
        margin={"5vh auto"}
        fontWeight={{ base: "normal", md: "normal", lg: "bold" }}
      >
        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            HTML
          </Text>
          <StarIcons rating={4} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            CSS
          </Text>
          <StarIcons rating={4.5} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            JavaScript
          </Text>
          <StarIcons rating={4} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            TypeScript
          </Text>
          <StarIcons rating={3.5} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            React
          </Text>
          <StarIcons rating={4} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Redux
          </Text>
          <StarIcons rating={3.5} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 0vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Redux Toolkit
          </Text>
          <StarIcons rating={3.5} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 1vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Tailwind css
          </Text>
          <StarIcons rating={4} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Chakra UI
          </Text>
          <StarIcons rating={4} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Bootstrap
          </Text>
          <StarIcons rating={4.5} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Java
          </Text>
          <StarIcons rating={3.5} />
        </GridItem>

        <GridItem display={"flex"} justifyContent={"space-between"} gap={"1vh"}>
          <Text
            border={`1px solid ${
              props.textColor === "black" ? "black" : "white"
            }`}
            textAlign={"center"}
            p={"0.8vh 4vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
          >
            Git
          </Text>
          <StarIcons rating={3} />
        </GridItem>
      </Grid>
    </div>
  );
});

export default Skills;