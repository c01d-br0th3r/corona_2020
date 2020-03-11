import React from "react";
import styled from "styled-components";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const NaverMapApi = ({ lat, lng, stores }) => {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"}
      style={{ width: "100%", height: "500px" }}
      defaultCenter={{ lat: lat, lng: lng }}
      defaultZoon={13}
    >
      {stores.map(store => (
        <Marker
          key={store.code}
          position={new navermaps.LatLng(store.lat, store.lng)}
          animation={2}
          onClick={() => {
            alert(
              `${store.name}의 남은 마스크 개수는${
                store.remain_stat === "plenty" ? "100개 이상" : ""
              } ${store.remain_stat === "some" ? "30개 이상" : ""}${
                store.remain_stat === "few" ? "10개 이상" : ""
              }${store.remain_stat === "empty" ? "품절" : ""}${
                store.remain_stat === null ? "확인 불가" : ""
              }입니다.`
            );
          }}
        />
      ))}
    </NaverMap>
  );
};

class Map extends React.Component {
  render() {
    const { lat, lng, stores } = this.props;
    return (
      <RenderAfterNavermapsLoaded
        ncpClientId={"wmth7j6l1b"}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapApi lat={lat} lng={lng} stores={stores} />
      </RenderAfterNavermapsLoaded>
    );
  }
}

export default Map;
