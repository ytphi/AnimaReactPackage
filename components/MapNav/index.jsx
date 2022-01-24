import React from "react";
import styled from "styled-components";


function MapNav(props) {
  const { className } = props;

  return (
    <MapNav1 className={`map-nav ${className || ""}`}>
      <OverlapGroup2 className="overlap-group2">
        <Group39 className="group-39"></Group39>
        <Path93 className="path-93" src="/img/path-93@1x.png" />
        <Group41 className="group-41"></Group41>
      </OverlapGroup2>
    </MapNav1>
  );
}

const MapNav1 = styled.div`
  position: absolute;
  height: 68px;
  top: 151px;
  left: 0;
  display: flex;
  align-items: flex-end;
  min-width: 196px;
  transition: all 0.2s ease;
  background-image: url(/img/group-36@1x.png);
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &.map-nav.map-nav-1 {
    top: 968px;
  }

  &.map-nav.map-nav-2 {
    top: 1884px;
  }

  &.map-nav.map-nav-3 {
    top: 968px;
  }

  &.map-nav.map-nav-4 {
    top: 1884px;
  }

  &.map-nav.map-nav-5 {
    top: 272px;
  }

  &.map-nav.map-nav-6 {
    top: 272px;
  }

  &.map-nav.map-nav-7 {
    top: 360px;
  }

  &:hover {
    transform: translate(128px, 0);
  }
`;

const OverlapGroup2 = styled.div`
  width: 196px;
  height: 68px;
  position: relative;
  margin-bottom: -0.36px;
`;

const Group39 = styled.div`
  position: absolute;
  width: 31px;
  height: 38px;
  top: 15px;
  left: 139px;
  background-image: url(/img/group-38@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Path93 = styled.img`
  position: absolute;
  width: 19px;
  height: 18px;
  top: 23px;
  left: 18px;
  object-fit: cover;
`;

const Group41 = styled.div`
  position: absolute;
  width: 196px;
  height: 68px;
  top: 0;
  left: 0;
  background-image: url(/img/group-40@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

export default MapNav;
