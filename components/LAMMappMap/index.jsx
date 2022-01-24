import React from "react";
import FeedNav from "../FeedNav";
import MapNav from "../MapNav";
import LAMMIcon from "../LAMMIcon";
import Group52 from "../Group52";
import Group1331 from "../Group1331";
import Group1330 from "../Group1330";
import Header from "../Header";
import styled from "styled-components";
import "./LAMMappMap.css";

function LAMMappMap(props) {
  const {
    group1469,
    group1467,
    group1459,
    group1336,
    group1340,
    rectangle1085,
    rectangle1084,
    map,
    lamminfowindow,
    group1326,
    group53,
    group1327,
    group1345,
    group1461,
    group1354,
    group1463,
    group1473,
    group1474,
    group1475,
    group1476,
    group1477,
    group1478,
    group1479,
    group1480,
    group1452,
    group1454,
    group1455,
    group1456,
    group1471,
    mapNav1Props,
    mapNav2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="lammapp-map screen">
        <OverlapGroup10>
          <Rectangle1110></Rectangle1110>
          <Group1469 style={{ backgroundImage: `url(${group1469})` }}></Group1469>
          <Group1467 style={{ backgroundImage: `url(${group1467})` }}></Group1467>
          <Group1459 style={{ backgroundImage: `url(${group1459})` }}></Group1459>
          <Group1359>
            <GroupContainer>
              <Group1338>
                <Group1337>
                  <Group1336 style={{ backgroundImage: `url(${group1336})` }}></Group1336>
                </Group1337>
              </Group1338>
              <Group1340 style={{ backgroundImage: `url(${group1340})` }}></Group1340>
            </GroupContainer>
          </Group1359>
          <Rectangle1085 src={rectangle1085} />
          <Rectangle1084 src={rectangle1084} />
          <Map src={map} />
          <Sidebar></Sidebar>
          <FeedNav />
          <MapNav />
          <MapNav className={mapNav1Props.className} />
          <MapNav className={mapNav2Props.className} />
          <LAMMinfoWindow style={{ backgroundImage: `url(${lamminfowindow})` }}></LAMMinfoWindow>
          <LAMMIcon />
          <Group52 />
          <Group1331 />
          <Group1326 style={{ backgroundImage: `url(${group1326})` }}></Group1326>
          <Group53 style={{ backgroundImage: `url(${group53})` }}></Group53>
          <Group1330 />
          <Group1327 style={{ backgroundImage: `url(${group1327})` }}></Group1327>
          <Group1464>
            <GroupContainer1>
              <Group1460>
                <Group1346>
                  <Group1345 style={{ backgroundImage: `url(${group1345})` }}></Group1345>
                </Group1346>
              </Group1460>
              <Group1340 style={{ backgroundImage: `url(${group1461})` }}></Group1340>
            </GroupContainer1>
          </Group1464>
          <Group1465>
            <GroupContainer1>
              <Group1462>
                <Group1355>
                  <Group1354 style={{ backgroundImage: `url(${group1354})` }}></Group1354>
                </Group1355>
              </Group1462>
              <Group1340 style={{ backgroundImage: `url(${group1463})` }}></Group1340>
            </GroupContainer1>
          </Group1465>
          <Group1473 style={{ backgroundImage: `url(${group1473})` }}></Group1473>
          <Group1474 style={{ backgroundImage: `url(${group1474})` }}></Group1474>
          <Group1475 style={{ backgroundImage: `url(${group1475})` }}></Group1475>
          <Group1476 style={{ backgroundImage: `url(${group1476})` }}></Group1476>
          <Group1477 style={{ backgroundImage: `url(${group1477})` }}></Group1477>
          <Group1478 style={{ backgroundImage: `url(${group1478})` }}></Group1478>
          <Group1479 style={{ backgroundImage: `url(${group1479})` }}></Group1479>
          <Group1480 style={{ backgroundImage: `url(${group1480})` }}></Group1480>
          <Header />
          <GroupContainer2>
            <Group1452 style={{ backgroundImage: `url(${group1452})` }}></Group1452>
            <Group1454 style={{ backgroundImage: `url(${group1454})` }}></Group1454>
            <Group1455 style={{ backgroundImage: `url(${group1455})` }}></Group1455>
            <Group1456 style={{ backgroundImage: `url(${group1456})` }}></Group1456>
          </GroupContainer2>
          <Group1471 style={{ backgroundImage: `url(${group1471})` }}></Group1471>
        </OverlapGroup10>
      </div>
    </div>
  );
}

const OverlapGroup10 = styled.div`
  width: 816px;
  height: 4236px;
  position: relative;
  margin-left: -128px;
`;

const Rectangle1110 = styled.div`
  position: absolute;
  width: 428px;
  height: 1460px;
  top: 2776px;
  left: 128px;
  background-color: #9bc9da;
`;

const Group1469 = styled.div`
  position: absolute;
  width: 232px;
  height: 240px;
  top: 3390px;
  left: 292px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1467 = styled.div`
  position: absolute;
  width: 232px;
  height: 240px;
  top: 2834px;
  left: 292px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1459 = styled.div`
  position: absolute;
  width: 232px;
  height: 240px;
  top: 3112px;
  left: 292px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1359 = styled.div`
  position: absolute;
  height: 240px;
  top: 3390px;
  left: 292px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 232px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

const GroupContainer = styled.div`
  width: 232px;
  height: 240px;
  position: relative;
  margin-top: 0;
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

const Group1340 = styled.div`
  position: absolute;
  width: 232px;
  height: 240px;
  top: 0;
  left: 0;
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
  height: 4152px;
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

const Group1464 = styled.div`
  position: absolute;
  height: 240px;
  top: 2834px;
  left: 292px;
  display: flex;
  padding: 0px 0;
  justify-content: center;
  align-items: flex-start;
  min-width: 232px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

const GroupContainer1 = styled.div`
  width: 232px;
  height: 240px;
  position: relative;
`;

const Group1460 = styled.div`
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

const Group1465 = styled.div`
  position: absolute;
  height: 240px;
  top: 3112px;
  left: 292px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 232px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

const Group1462 = styled.div`
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

const Group1473 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 94px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1474 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 568px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1475 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 1043px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1476 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 1517px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1477 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 1993px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1478 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 2468px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1479 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 2943px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1480 = styled.div`
  position: absolute;
  width: 20px;
  height: 510px;
  top: 3416px;
  left: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const GroupContainer2 = styled.div`
  position: absolute;
  width: 588px;
  height: 374px;
  top: 3685px;
  left: 48px;
`;

const Group1452 = styled.div`
  position: absolute;
  width: 427px;
  height: 237px;
  top: 96px;
  left: 97px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1454 = styled.div`
  position: absolute;
  width: 370px;
  height: 136px;
  top: 0;
  left: 114px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1455 = styled.div`
  position: absolute;
  width: 503px;
  height: 237px;
  top: 112px;
  left: 85px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1456 = styled.div`
  position: absolute;
  width: 571px;
  height: 237px;
  top: 136px;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group1471 = styled.div`
  position: absolute;
  width: 350px;
  height: 170px;
  top: 3860px;
  left: 167px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default LAMMappMap;
