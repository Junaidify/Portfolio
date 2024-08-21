import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { Key, forwardRef } from "react";
import { Loading } from "./Loading";
import { Text, GridItem, Box, Image, Grid } from "@chakra-ui/react";

interface ProjectItem {
  id: Key | string;
  img: string;
  link: string;
  title: string;
  description: string;
}

interface ProjectTheme {
  textColor: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectTheme>(
  (props, ref) => {
    useFetch();
    const { isLoading, isError, data } = useSelector(
      (state: any) => state.fetch
    );

    if (isLoading) return <Loading />;
    if (isError) return <div>Error</div>;

    console.log(data);

    return (
      <div
        ref={ref}
        style={{
          width: "80%",
          height: "100%",
          margin: "3vh auto 0",
        }}
      >
        <Text
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          pt={"5vh"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Projects
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          mt={"5vh"}
          mx={"auto"}
          columnGap={"5vw"}
          rowGap={"5vh"}
        >
          {data &&
            data.map((item: ProjectItem) => (
              <GridItem
                key={item.id}
                onClick={() => window.open(item.link)}
                border={`1px solid ${
                  props.textColor === "black" ? "black" : "white"
                }`}
                height={"60vh"}
                w={"100%"}
                borderRadius={"10px"}
                cursor={"pointer"}
                overflow={"hidden"}
              >
                <Box w={"100%"} h={"50%"}>
                  <Image w={"100%"} h={"100%"} src={item.img} />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  rowGap={"2vh"}
                  columnGap={"2vw"}
                  m={"2vh 1vw"}
                >
                  <Text fontSize={"1.5rem"} fontWeight={"bold"}>
                    {item.title}
                  </Text>
                  <Text lineHeight={"2.4vh"}>{item.description}</Text>
                </Box>
              </GridItem>
            ))}
        </Grid>
      </div>
    );
  }
);

export default Projects;