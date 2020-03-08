import React from "react";
import MaskPresenter from "./MaskPresenter";
import Axios from "axios";

class MaskContainer extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,
    storeData: null,
    isLoading: true
  };

  handleGeoSuccess = location => {
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  };

  handleGeoError = () => {
    console.log("Location error!");
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleGeoSuccess,
      this.handleGeoError
    );
  };

  componentDidUpdate = async () => {
    const { latitude, longitude, isLoading } = this.state;
    if (isLoading) {
      const {
        data: { stores }
      } = await Axios.get(
        "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?",
        { params: { lat: latitude, lng: longitude, m: 1000 } }
      );
      this.setState({ isLoading: false, storeData: stores });
    }
  };

  render() {
    console.log(this.state);
    const { storeData, isLoading } = this.state;
    if (!isLoading && storeData !== null) {
      return <MaskPresenter stores={storeData} />;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default MaskContainer;
