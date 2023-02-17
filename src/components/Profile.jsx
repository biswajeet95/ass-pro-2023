import { Box, Typography, Divider, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { useParams } from "react-router-dom";
import GoogleMap from "./GoogleMap";

const Profile = () => {
  const { id } = useParams();
  //const params = JSON.stringify(id)
  console.log(id);
  //const param = id;
  const [data, setData] = useState({});
  const detailsCard = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        // const newList = users.find((item) => {
        //   return item.id === parseInt(id)
        // })
        //setData(users);
        setData(result.data);
        //console.log(newList);
      });
    // setData(json);
  };

  useEffect(() => {
    detailsCard();
  }, []);
  //console.log(data);
  console.log(data);
  console.log(data.first_name);
  return (
    <>
      <Box
        sx={{
          p: "4em",
          display: "flex",
          // flexDirection: "row",
          // justifyContent: "space-between",
        }}
      >
        <SideBar id={data}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "70%" }}>
          <Header title="Profile" />
          <Grid container>
            <Grid item xs sx={{ margin: "20px" }}>
              {
                <Box textAlign="center">
                  <img
                    alt=""
                    src={data.avatar}
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ mb: "20px", color: "#5e5e5e", fontWeight: "bold" }}
                  >
                    {data.first_name}
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#838485" }}>
                    Username :{" "}
                    <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                      Name
                    </span>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#838485" }}>
                    e-mail :{" "}
                    <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                      Name
                    </span>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#838485" }}>
                    Phone :{" "}
                    <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                      Name
                    </span>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#838485" }}>
                    Website :{" "}
                    <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                      Name
                    </span>
                  </Typography>
                </Box>
              }

              <Divider
                sx={{ margin: "20px", marginLeft: "9%", marginRight: "9%" }}
              />
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ mb: "20px", color: "#838485", fontWeight: "bold" }}
                >
                  Company
                </Typography>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  Name :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  catchphrase :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  bs :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginRight: "20px", mt: "20px" }}
            ></Divider>
            <Grid item xs sx={{ margin: "20px" }}>
              <Typography
                variant="h5"
                sx={{ mb: "20px", color: "#838485", fontWeight: "bold" }}
              >
                Address:
              </Typography>
              <Box sx={{ ml: "4em" }}>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  Street :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  Suite :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  City :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>
                <Typography variant="h5" sx={{ color: "#838485" }}>
                  Zipcode :{" "}
                  <span style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                    Name
                  </span>
                </Typography>

                <Box mt="20px">
                  <GoogleMap />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
