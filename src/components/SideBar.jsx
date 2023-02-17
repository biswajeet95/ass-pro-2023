import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
//const params = parseInt(id);
  // console.log(id);
  // console.log(params);
  return (
    <Box bgcolor="#5f1cfc" width="20%" height="95vh" borderRadius="30px">
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: "70%",
        }}
      >
        <ListItem>
          <ListItemButton onClick={() => navigate(`/profile/${id}`)}>
            <Typography variant="h5" sx={{ color: "#d4d5d6" }}>
              Profile
            </Typography>
          </ListItemButton>
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ marginLeft: "9%", marginRight: "9%", bgcolor: "#d4d5d6" }}
        />
        <ListItem>
          <ListItemButton onClick={() => navigate("/posts")}>
            <Typography variant="h5" sx={{ color: "#d4d5d6" }}>
              Posts
            </Typography>
          </ListItemButton>
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ marginLeft: "9%", marginRight: "9%", bgcolor: "#d4d5d6" }}
        />
        <ListItem>
          <ListItemButton onClick={() => navigate("/gallery")}>
            <Typography variant="h5" sx={{ color: "#d4d5d6" }}>
              Gallery
            </Typography>
          </ListItemButton>
        </ListItem>
        <Divider
          variant="inset"
          component="li"
          sx={{ marginLeft: "9%", marginRight: "9%", bgcolor: "#d4d5d6" }}
        />
        <ListItem>
          <ListItemButton onClick={() => navigate("/todo")}>
            <Typography variant="h5" sx={{ color: "#d4d5d6" }}>
              ToDo
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
