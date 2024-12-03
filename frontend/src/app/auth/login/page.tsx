import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Box, Input } from "@chakra-ui/react/";
import React from "react";

const login = () => {
  return (
    <Box padding={"2"} borderBlock={"lightgreen"} outline={"darkgray"}>
      <FormControl backgroundColor={"white"}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default login;
