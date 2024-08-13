import { useSelector } from "react-redux";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
// import project_img from "../redux/pantaloons.png";

export const Portfolio = ({ textColor }: { textColor: string }) => {
  const { isLoading, isError, data } = useSelector((state: any) => state.fetch);
  useFetch();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data);

  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        margin: "13vh auto",
        color: textColor,
        paddingTop: "5vh",
      }}
    >
      <Text fontSize={"3rem"} pt={"5vh"} fontWeight={"bold"} textAlign={"center"} >
        Projects
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        mt={"5vh"}
        columnGap={"5vw"}
        rowGap={"5vh"}
      >
        {data &&
          data.map(
            (item: {
              id: Key | null | undefined;
              img: string | undefined;
              link: string | undefined;
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              description:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
            }) => (
              <GridItem
                key={item.id}
                onClick={() => window.open(item.link)}
                border={`1px solid ${
                  textColor === "black" ? "black" : "white"
                }`}
                height={"65vh"}
                w={"100%"}
                borderRadius={"10px"}
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
                  <Text fontSize={"1.5rem"}>{item.title}</Text>
                  <Text lineHeight={"2.4vh"}>{item.description}</Text>
                </Box>
              </GridItem>
            )
          )}
      </Grid>
    </div>
  );
};
