import React from "react";
import Header from "../Header";
import FeedNav from "../FeedNav";
import MapNav from "../MapNav";
import ContactNav from "../ContactNav";
import LAMMIcon from "../LAMMIcon";
import styled from "styled-components";
import "./LAMMapp2.css";

function LAMMapp2(props) {
  const {
    map2_Parking1,
    map,
    dotselector31,
    dotselector21,
    dotselector11,
    lamminfowindow,
    dotselector32,
    dotselector22,
    dotselector12,
    feedNavProps,
    mapNavProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="lammappv2 screen">
        <OverlapGroup10>
          <Map2Parking1 src={map2_Parking1} />
          <Map src={map} />
          <Sidebar></Sidebar>
          <Header />
          <FeedNav className={feedNavProps.className} />
          <MapNav className={mapNavProps.className} />
          <ContactNav />
          <DotSelector3 src={dotselector31} />
          <DotSelector2 src={dotselector21} />
          <DotSelector1 src={dotselector11} />
          <LAMMinfoWindow style={{ backgroundImage: `url(${lamminfowindow})` }}></LAMMinfoWindow>
          <LAMMIcon />
          <DotSelector31 src={dotselector32} />
          <DotSelector21 src={dotselector22} />
          <DotSelector11 src={dotselector12} />
        </OverlapGroup10>
      </div>
    </div>
  );
}

const OverlapGroup10 = styled.div`
  width: 816px;
  height: 1851px;
  position: relative;
  margin-left: -128px;
`;

const Map2Parking1 = styled.img`
  position: absolute;
  width: 805px;
  height: 1103px;
  top: 748px;
  left: 10px;
  object-fit: cover;
`;

const Map = styled.img`
  position: absolute;
  width: 663px;
  height: 926px;
  top: 0;
  left: 10px;
  object-fit: cover;
`;

const Sidebar = styled.div`
  position: absolute;
  width: 114px;
  height: 1767px;
  top: 84px;
  left: 128px;
  background-color: var(--allports);
`;

const DotSelector3 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 874px;
  left: 393px;
  object-fit: cover;
`;

const DotSelector2 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 874px;
  left: 462px;
  object-fit: cover;
`;

const DotSelector1 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 874px;
  left: 324px;
  object-fit: cover;
`;

const LAMMinfoWindow = styled.div`
  position: absolute;
  width: 227px;
  height: 227px;
  top: 349px;
  left: 278px;
  background-size: cover;
  background-position: 50% 50%;
`;

const DotSelector31 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 1802px;
  left: 462px;
  object-fit: cover;
`;

const DotSelector21 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 1802px;
  left: 393px;
  object-fit: cover;
`;

const DotSelector11 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 1802px;
  left: 324px;
  object-fit: cover;
`;

export default LAMMapp2;
