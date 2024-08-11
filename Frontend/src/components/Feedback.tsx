import { useCallback, useState } from "react";
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

export const Feedback = () => {
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
      .post("http://localhost:3000/feedbacks", formData)
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
    <div id="feedback_wrapper">
      <div>
        <Grid className="feedback" color={"red"} m={"0 auto"} rowGap={"2vh"}>
          <GridItem>
            <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
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
            />
          </GridItem>

          <GridItem>
            <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
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
            />
          </GridItem>

          <GridItem>
            <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
              Message
            </Text>

            <Textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              mt={"1vh"}
              size={"md"}
              placeholder="Write your message"
            />
          </GridItem>

          <Button
            onClick={handleSubmit}
            m={"0 auto"}
            w={"30%"}
            type="submit"
            color={"red"}
          >
            Send
          </Button>
        </Grid>
      </div>
    </div>
  );
};
