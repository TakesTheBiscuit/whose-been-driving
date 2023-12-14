import { Box, Typography } from "@material-ui/core";
import React from "react";

     

function Home() {    
  return (
    <>
      <Box>
     <Typography style={{ padding: 16, fontSize: "2rem" }} variant="h1">
        <u>W</u>hose <u>B</u>een <u>D</u>riving?
      </Typography>
      <Typography
        style={{
          padding: 20,
          fontSize: "1.15rem",
          marginBottom: 20,
          marginTop: -25,
        }}
        variant="h2"
      >
        Serious app by{" "}
        <a href="https://github.com/TakesTheBiscuit/whose-been-driving">
          TakesTheBiscuit
        </a>
      </Typography>
      </Box>

      </>
    );
};

export default Home;