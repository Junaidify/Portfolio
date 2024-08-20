import { Box, Text, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box mt={"3vh"}>
      <Text
        fontSize={"3rem"}
        pt={"5vh"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"white"}
      >
        Projects
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        mt={"5vh"}
        columnGap={"5vw"}
        rowGap={"5vh"}
        width={"80%"}
        m={"5vh auto"}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Box
            key={index}
            border={`1px solid gray`}
            height={"65vh"}
            w={"100%"}
            borderRadius={"10px"}
            padding={"1rem"}
          >
            <Skeleton height={"50%"} borderRadius={"10px"} />
            <Box
              display={"flex"}
              flexDirection={"column"}
              rowGap={"2vh"}
              columnGap={"2vw"}
              m={"2vh 1vw"}
            >
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
