// File: src/components/Login.tsx
import React, { useState } from "react";
import "./Login.css";
import { Box, Button, Input, Link, Text } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Login: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <Box className="form-container sign-up">
        <form>
          <Text as="h3">Create Your Account</Text>
          <Text>Register with E-mail</Text>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Enter E-mail" />
          <Input type="password" placeholder="Enter Password" />
          <Button>Sign Up</Button>
        </form>
      </Box>

      {/* Sign In Form */}
      <Box className="form-container sign-in">
        <form>
          <Text as="h1">Sign In</Text>
          <Text>Login With Email & Password</Text>
          <Input type="email" placeholder="Enter E-mail" />
          <Input type="password" placeholder="Enter Password" />
          <Link href="#">Forget Password?</Link>
          <Button>Sign In</Button>
        </form>
      </Box>

      {/* Toggle Container */}
      <Box className="toggle-container">
        <Box className="toggle">
          <Box className="toggle-panel toggle-left">
            <Text as="h1">Welcome To BRAC-Uni-Verse </Text>
            <h4>Your Cosmic Companion</h4>
            <Text>Sign in With ID & Password</Text>
            <Button className="hidden" id="login" onClick={() => setIsActive(false)}>Sign In</Button>
          </Box>
          <Box className="toggle-panel toggle-right">
            <Text as="h1">Hii BRACUAN's</Text>
            <Text>This is your cosmic Companios</Text>
            <Button className="hidden" id="register" onClick={() => setIsActive(true)}>Sign Up</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
