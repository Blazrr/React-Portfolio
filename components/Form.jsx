import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormSent from "./FormSent";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      input.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      emailjs
        .sendForm(
          "service_be9wjcc",
          "template_pvic6tb",
          form.current,
          "eZkX0TG4owgXU1lb-"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  const [sent, setSent] = useState(false);

  return (
    <>
      {" "}
      {!sent ? (
        <section>
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-center text-xl underline underline-offset-4 font-bold  md:text-4xl">
              Contact Form
            </h2>
            <Box
              w="100%"
              p={8}
              borderWidth="1px"
              borderColor="purple.400"
              mt="4em"
              borderRadius="lg"
            >
              <form action="" className="flex  flex-col space-y-8" ref={form}>
                <FormControl>
                  <FormLabel>Your Name</FormLabel>
                  <Input
                    placeholder="First name"
                    name="user_name"
                    borderColor="purple.400"
                  />
                </FormControl>
                <FormControl isInvalid={isError} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={input}
                    onChange={handleInputChange}
                    name="user_email"
                    borderColor="purple.400"
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email you&apos;d like to send your email with.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <Textarea
                    placeholder="Enter your message"
                    name="message"
                    borderColor="purple.400"
                  />
                </FormControl>
                <div className="flex justify-center">
                  <Button colorScheme="facebook" onClick={sendEmail}>
                    Send your Email
                  </Button>
                </div>
              </form>
            </Box>
          </div>
        </section>
      ) : (
        <FormSent />
      )}
    </>
  );
};

export default Form;
