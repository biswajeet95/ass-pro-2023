import { Box, Typography } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const Posts = () => {
  return (
    <>
      <Box
        sx={{
          p: "4em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header title="Posts" />
          <Box display="flex" justifyContent="center" mt="30vh">
            <Typography
              variant="h1"
              sx={{ fontWeight: "900", color: "#b3b1b1" }}
            >
              {" "}
              Comming Soon{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Posts;
