import { forwardRef, useCallback, useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { FeedbackPropType } from "../redux/initialState";

export const Feedback = forwardRef(({ textColor }: { textColor: string }, ref : any) => {
  const [formData, setFormData] = useState<FeedbackPropType>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = useCallback(() => {
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill in all the fields");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email");
      setFormData({ ...formData, email: "" });
      return;
    }

    axios
      .post("https://portfolio-fc8l.onrender.com/feedbacks", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }, [formData]);

  return (
    <div ref={ref} id="feedback_wrapper">
      <div>
        <Text fontSize={"3rem"} color={textColor} fontWeight={"bold"} textAlign={"center"} >Feedback Form</Text>
        <Grid className="feedback" color={"red"} m={"0 auto"} rowGap={"2vh"}>
          <GridItem>
            <Text fontSize={"xl"} color={textColor} fontWeight={"bold"}>
              Name
            </Text>
            <Input
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text"
              mt={"1vh"}
              size={"md"}
              placeholder="Name"
              borderColor={textColor === "black" ? "black" : "white"}
            />
          </GridItem>

          <GridItem>
            <Text fontSize={"xl"} color={textColor} fontWeight={"bold"}>
              Email:
            </Text>

            <Input
              name="email"
              onChange={handleChange}
              value={formData.email}
              size={"md"}
              type="email"
              mt={"1vh"}
              placeholder="Email"
              borderColor={textColor === "black" ? "black" : "white"}
            />
          </GridItem>

          <GridItem>
            <Text fontSize={"xl"} color={textColor} fontWeight={"bold"}>
              Message
            </Text>

            <Textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              mt={"1vh"}
              size={"md"}
              placeholder="Write your message"
              borderColor={textColor === "black" ? "black" : "white"}
            />
          </GridItem>

          <Button
            onClick={handleSubmit}
            m={"0 auto"}
            w={"30%"}
            type="submit"
            color={textColor === "black" ? "white" : "black"}
            bg={textColor === "black" ? "black" : "white"}
          >
            Send
          </Button>
        </Grid>
      </div>
    </div>
  );
});
