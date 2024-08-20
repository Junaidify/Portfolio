import { Grid, GridItem, Text } from "@chakra-ui/react";
import "../styles/navbar.css";
import { StarIcons } from "./StarIcons";
import { forwardRef } from "react";

interface SkillItem {
  textColor: string;
}

export const Skills = forwardRef<HTMLDivElement, SkillItem>((props, ref) => {
  return (
    <div id="skills" ref={ref}>
      <Text
        fontSize={"3rem"}
        color={props.textColor}
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
        color={props.textColor}
        rowGap={"5vh"}
        columnGap={"5vw"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"90%"}
        margin={"5vh auto"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            p={"0.8vh 2vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            p={"0.8vh 4vw"}
            fontSize={"xl"}
            borderRadius={"20px"}
            w={"40%"}
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
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
            fontWeight={props.textColor === "black" ? "bold" : "normal"}
          >
            Git
          </Text>
          <StarIcons rating={3} />
        </GridItem>
      </Grid>
    </div>
  );
});
