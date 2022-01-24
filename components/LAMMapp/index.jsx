import React from "react";
import Header from "../Header";
import FeedNav from "../FeedNav";
import MapNav from "../MapNav";
import LAMMIcon from "../LAMMIcon";
import Group52 from "../Group52";
import Group1331 from "../Group1331";
import Group1330 from "../Group1330";
import styled from "styled-components";
import "./LAMMapp.css";

function LAMMapp(props) {
  const {
    group1345,
    group1349,
    group1354,
    group1358,
    group1336,
    group1340,
    rectangle1085,
    rectangle1084,
    map,
    lamminfowindow,
    group1326,
    group52,
    group1331,
    mapNav1Props,
    mapNav2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="lammapp screen">
        <OverlapGroup12>
          <Group1359>
            <GroupContainer>
              <Group1347>
                <Group1346>
                  <Group1345 style={{ backgroundImage: `url(${group1345})` }}></Group1345>
                </Group1346>
              </Group1347>
              <Group1349 style={{ backgroundImage: `url(${group1349})` }}></Group1349>
            </GroupContainer>
            <GroupContainer1>
              <Group1356>
                <Group1355>
                  <Group1354 style={{ backgroundImage: `url(${group1354})` }}></Group1354>
                </Group1355>
              </Group1356>
              <Group1349 style={{ backgroundImage: `url(${group1358})` }}></Group1349>
            </GroupContainer1>
            <GroupContainer1>
              <Group1338>
                <Group1337>
                  <Group1336 style={{ backgroundImage: `url(${group1336})` }}></Group1336>
                </Group1337>
              </Group1338>
              <Group1349 style={{ backgroundImage: `url(${group1340})` }}></Group1349>
            </GroupContainer1>
          </Group1359>
          <Rectangle1085 src={rectangle1085} />
          <Rectangle1084 src={rectangle1084} />
          <Map src={map} />
          <Sidebar></Sidebar>
          <Header />
          <FeedNav />
          <MapNav />
          <MapNav className={mapNav1Props.className} />
          <MapNav className={mapNav2Props.className} />
          <LAMMinfoWindow style={{ backgroundImage: `url(${lamminfowindow})` }}></LAMMinfoWindow>
          <LAMMIcon />
          <Group52 />
          <Group1331 />
          <Group1326 style={{ backgroundImage: `url(${group1326})` }}></Group1326>
          <Group53 style={{ backgroundImage: `url(${group52})` }}></Group53>
          <Group1330 />
          <Group1327 style={{ backgroundImage: `url(${group1331})` }}></Group1327>
        </OverlapGroup12>
      </div>
    </div>
  );
}

const OverlapGroup12 = styled.div`
  width: 816px;
  height: 3699px;
  position: relative;
  margin-left: -128px;
`;

const Group1359 = styled.div`
  position: absolute;
  width: 428px;
  top: 2675px;
  left: 128px;
  display: flex;
  flex-direction: column;
  padding: 68.9px 31.9px;
  align-items: flex-end;
  min-height: 1024px;
  background-color: #4e4e4e;
`;

const GroupContainer = styled.div`
  width: 232px;
  height: 240px;
  position: relative;
  margin-top: 90px;
`;

const Group1347 = styled.div`
  position: absolute;
  width: 112px;
  height: 113px;
  top: 58px;
  left: 61px;
  display: flex;
`;

const Group1346 = styled.div`
  flex: 1;
  width: 111.80000305175781px;
  display: flex;
  overflow: hidden;
`;

const Group1345 = styled.div`
  margin-top: -10.7px;
  margin-left: -2px;
  margin-right: 0;
  flex: 1;
  margin-bottom: -47.9px;
  width: 113.8348388671875px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1349 = styled.div`
  position: absolute;
  width: 232px;
  height: 240px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
`;

const GroupContainer1 = styled.div`
  width: 232px;
  height: 240px;
  position: relative;
  margin-top: 39px;
`;

const Group1356 = styled.div`
  position: absolute;
  width: 118px;
  height: 117px;
  top: 55px;
  left: 58px;
  display: flex;
`;

const Group1355 = styled.div`
  flex: 1;
  width: 117.75564575195312px;
  display: flex;
  overflow: hidden;
`;

const Group1354 = styled.div`
  margin-top: -0.9px;
  margin-left: -99.6px;
  margin-right: -34.7px;
  flex: 1;
  margin-bottom: 0;
  width: 252.01898193359375px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1338 = styled.div`
  position: absolute;
  width: 111px;
  height: 111px;
  top: 60px;
  left: 61px;
  display: flex;
`;

const Group1337 = styled.div`
  flex: 1;
  width: 110.63999938964844px;
  display: flex;
  overflow: hidden;
`;

const Group1336 = styled.div`
  margin-top: -3px;
  margin-left: -31.2px;
  margin-right: -23.2px;
  flex: 1;
  margin-bottom: -4.1px;
  width: 165.02294921875px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Rectangle1085 = styled.img`
  position: absolute;
  width: 780px;
  height: 924px;
  top: 1852px;
  left: 2px;
  object-fit: cover;
`;

const Rectangle1084 = styled.img`
  position: absolute;
  width: 805px;
  height: 1103px;
  top: 747px;
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
  height: 3615px;
  top: 84px;
  left: 128px;
  background-color: var(--allports);
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

const Group1326 = styled.div`
  position: absolute;
  width: 203px;
  height: 190px;
  top: 1108px;
  left: 311px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group53 = styled.div`
  position: absolute;
  width: 223px;
  height: 246px;
  top: 1102px;
  left: 302px;
  transition: all 0.2s ease;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

const Group1327 = styled.div`
  position: absolute;
  width: 223px;
  height: 246px;
  top: 2156px;
  left: 281px;
  transition: all 0.2s ease;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

export default LAMMapp;
