import React from "react";
import { Link } from "react-router-dom";
import Group2 from "../Group2";
import FeedNav from "../FeedNav";
import MapNav from "../MapNav";
import ContactNav from "../ContactNav";
import styled from "styled-components";
import "./LAMMapp1.css";

function LAMMapp1(props) {
  const {
    overlapGroup9,
    path7,
    group4,
    dotselector3,
    dotselector2,
    dotselector1,
    group2Props,
    feedNavProps,
    mapNavProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="lammapp-1 screen">
        <OverlapGroup9 style={{ backgroundImage: `url(${overlapGroup9})` }}>
          <OverlapGroup10>
            <Sidebar></Sidebar>
            <Header>
              <Group5>
                <OverlapGroup5>
                  <Group2 className={group2Props.className} />
                  <Path7 src={path7} />
                  <Group4 style={{ backgroundImage: `url(${group4})` }}></Group4>
                </OverlapGroup5>
                <Rectangle958></Rectangle958>
              </Group5>
            </Header>
            <FeedNav className={feedNavProps.className} />
            <MapNav className={mapNavProps.className} />
            <ContactNav />
          </OverlapGroup10>
          <DotSelector3 src={dotselector3} />
          <DotSelector2 src={dotselector2} />
          <Link to="/lammapp">
            <DotSelector1 src={dotselector1} />
          </Link>
        </OverlapGroup9>
      </div>
    </div>
  );
}

const OverlapGroup9 = styled.div`
  width: 805px;
  height: 1103px;
  position: relative;
  margin-left: -138px;
  margin-top: -88.5px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup10 = styled.div`
  position: absolute;
  width: 556px;
  height: 926px;
  top: 88px;
  left: 10px;
`;

const Sidebar = styled.div`
  position: absolute;
  width: 114px;
  height: 842px;
  top: 84px;
  left: 128px;
  background-color: var(--allports);
`;

const Header = styled.div`
  position: absolute;
  width: 429px;
  height: 109px;
  top: 0;
  left: 127px;
  display: flex;
`;

const Group5 = styled.div`
  flex: 1;
  width: 429px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OverlapGroup5 = styled.div`
  width: 429px;
  height: 100px;
  position: relative;
  background-color: var(--midnight-blue);
`;

const Path7 = styled.img`
  position: absolute;
  width: 3px;
  height: 5px;
  top: 72px;
  left: 199px;
  object-fit: cover;
`;

const Group4 = styled.div`
  position: absolute;
  width: 155px;
  height: 49px;
  top: 28px;
  left: 199px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Rectangle958 = styled.div`
  width: 428px;
  height: 9px;
  background-color: var(--bright-sun);
`;

const DotSelector3 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 962px;
  left: 403px;
  object-fit: cover;
`;

const DotSelector2 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 962px;
  left: 472px;
  object-fit: cover;
`;

const DotSelector1 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 962px;
  left: 334px;
  object-fit: cover;
  cursor: pointer;
`;

export default LAMMapp1;
