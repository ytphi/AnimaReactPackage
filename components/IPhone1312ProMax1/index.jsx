import React from "react";
import Header from "../Header";
import FeedNav from "../FeedNav";
import MapNav from "../MapNav";
import ContactNav from "../ContactNav";
import styled from "styled-components";
import "./IPhone1312ProMax1.css";

function IPhone1312ProMax1(props) {
  const {
    map,
    path3,
    path4,
    path2,
    group4,
    group11,
    group13,
    overlapGroupContainer,
    headerProps,
    feedNavProps,
    mapNavProps,
    contactNavProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-12-pro-max-1 screen">
        <OverlapGroup10>
          <Map src={map} />
          <Sidebar></Sidebar>
          <Header className={headerProps.className} />
          <FeedNav className={feedNavProps.className} />
          <MapNav className={mapNavProps.className} />
          <ContactNav className={contactNavProps.className} />
          <DotSelector3 src={path3} />
          <DotSelector2 src={path4} />
          <DotSelector1 src={path2} />
          <LAMMinfoWindow style={{ backgroundImage: `url(${group4})` }}></LAMMinfoWindow>
          <LAMMIcon style={{ backgroundImage: `url(${group11})` }}>
            <GroupContainer>
              <Group19 style={{ backgroundImage: `url(${group13})` }}></Group19>
              <Group21 style={{ backgroundImage: `url(${overlapGroupContainer})` }}></Group21>
            </GroupContainer>
          </LAMMIcon>
        </OverlapGroup10>
      </div>
    </div>
  );
}

const OverlapGroup10 = styled.div`
  width: 674px;
  height: 1061px;
  position: relative;
  margin-left: -128px;
  margin-top: -87.38px;
`;

const Map = styled.img`
  position: absolute;
  width: 663px;
  height: 1061px;
  top: 0;
  left: 10px;
  object-fit: cover;
`;

const Sidebar = styled.div`
  position: absolute;
  width: 114px;
  height: 842px;
  top: 171px;
  left: 128px;
  background-color: var(--allports);
`;

const DotSelector3 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 961px;
  left: 393px;
  object-fit: cover;
`;

const DotSelector2 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 961px;
  left: 462px;
  object-fit: cover;
`;

const DotSelector1 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 961px;
  left: 324px;
  object-fit: cover;
`;

const LAMMinfoWindow = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  top: 486px;
  left: 284px;
  background-size: cover;
  background-position: 50% 50%;
`;

const LAMMIcon = styled.div`
  position: absolute;
  height: 130px;
  top: 485px;
  left: 242px;
  display: flex;
  align-items: flex-start;
  min-width: 213px;
  transition: all 0.2s ease;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

const GroupContainer = styled.div`
  width: 213px;
  height: 130px;
  position: relative;
  margin-top: 0;
`;

const Group19 = styled.div`
  position: absolute;
  width: 124px;
  height: 124px;
  top: 3px;
  left: 44px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group21 = styled.div`
  position: absolute;
  width: 213px;
  height: 130px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
`;

export default IPhone1312ProMax1;
