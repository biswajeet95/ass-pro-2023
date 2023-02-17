import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Box } from "@mui/material";
class GoogleMap extends Component {
  render() {
    return (
      <Box >
        <Map
          google={this.props.google}
          style={{ width: "560px", height: "450px" }}
          zoom={10}
          initialCenter={{
            lat: -12.971599,
            lng: 77.594566,
          }}
        />
      </Box>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD5oZYrd01BySEOAHZVY13xwSkH0VNb4hY",
})(GoogleMap);
