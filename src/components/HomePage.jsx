import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const cards = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUsers(json.data);
  };
  console.log(users);
  useEffect(() => {
    cards();
  }, []);
  return (
    <Box
      sx={{
        bgcolor: "#5f1cfc",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          width: "40%",
          height: "70%",
          borderRadius: "30px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#d8d7db",
            width: "100%",
            height: "20%",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            color="#595859"
            fontFamily="Roboto, sans-serif"
          >
            Select an account
          </Typography>
        </Box>
        <Box p="10px">
          <Box display="flex" alignItems="center" overflow="auto">
            <List
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 450,
                "&::-webkit-scrollbar": {
                  width: 8,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "white",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#d8d7db",
                  borderRadius: 5,
                },
              }}
            >
              {users.map((value) => {
                return (
                  <>
                    <ListItem
                      key={value.id}
                      onClick={() => {
                        navigate(`/profile/${value.id}`);
                      }}
                    >
                      <ListItemButton key={value.id}>
                        <ListItemAvatar>
                          <Avatar
                            key={value.profilepicture}
                            alt={value.first_name}
                            src={value.avatar}
                          />
                        </ListItemAvatar>
                        <Typography variant="h6" key={value.name}>
                          {value.first_name}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    <Divider
                      variant="inset"
                      component="li"
                      sx={{ marginLeft: "5%", marginRight: "5%" }}
                    />
                  </>
                );
              })}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
