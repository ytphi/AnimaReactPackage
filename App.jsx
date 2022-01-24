
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LAMMappMap from "./components/LAMMappMap";
import LAMMapp from "./components/LAMMapp";
import LAMMapp1 from "./components/LAMMapp1";
import LAMMapp2 from "./components/LAMMapp2";
import IPhone1312ProMax1 from "./components/IPhone1312ProMax1";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lammapp-map">
          <LAMMappMap {...lAMMappMapData} />
        </Route>
        <Route path="/lammapp">
          <LAMMapp {...lAMMappData} />
        </Route>
        <Route path="/lammapp-1">
          <LAMMapp1 {...lAMMapp1Data} />
        </Route>
        <Route path="/lammappv2">
          <LAMMapp2 {...lAMMapp2Data} />
        </Route>
        <Route path="/:path(|iphone-13-12-pro-max-1)">
          <IPhone1312ProMax1 {...iPhone1312ProMax1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyBwFaLqVRzwZAkhhfxdr4Ft3lcsbzbshyI",
  authDomain: "lamm-app-6a5ee.firebaseapp.com",
  projectId: "lamm-app-6a5ee",
  storageBucket: "lamm-app-6a5ee.appspot.com",
  messagingSenderId: "491674290871",
  appId: "1:491674290871:web:479700fc7ac48eac129b32",
  measurementId: "G-08W75975TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const mapNav2Data = {
    className: "map-nav-1",
};

const mapNav3Data = {
    className: "map-nav-2",
};

const lAMMappMapData = {
    group1469: "/img/group-1468-1@1x.png",
    group1467: "/img/group-1466@1x.png",
    group1459: "/img/group-1458-1@1x.png",
    group1336: "/img/group-1332@1x.png",
    group1340: "/img/group-1339-1@1x.png",
    rectangle1085: "/img/rectangle-1085@1x.png",
    rectangle1084: "/img/map2-parking1@1x.png",
    map: "/img/map@1x.png",
    lamminfowindow: "/img/group-49-1@1x.png",
    group1326: "/img/group-1325-1@1x.png",
    group53: "/img/group-1324@1x.png",
    group1327: "/img/group-1324-1@1x.png",
    group1345: "/img/group-1341@1x.png",
    group1461: "/img/group-1348-1@1x.png",
    group1354: "/img/group-1350@1x.png",
    group1463: "/img/group-1357-1@1x.png",
    group1473: "/img/group-1472-10@1x.png",
    group1474: "/img/group-1472-10@1x.png",
    group1475: "/img/group-1472-10@1x.png",
    group1476: "/img/group-1472-10@1x.png",
    group1477: "/img/group-1472-10@1x.png",
    group1478: "/img/group-1472-10@1x.png",
    group1479: "/img/group-1472-10@1x.png",
    group1480: "/img/group-1472-10@1x.png",
    group1452: "/img/group-1451@1x.png",
    group1454: "/img/group-1453@1x.png",
    group1455: "/img/group-1451-1@1x.png",
    group1456: "/img/group-1451-2@1x.png",
    group1471: "/img/group-1470@1x.png",
    mapNav1Props: mapNav2Data,
    mapNav2Props: mapNav3Data,
};

const mapNav5Data = {
    className: "map-nav-3",
};

const mapNav6Data = {
    className: "map-nav-4",
};

const lAMMappData = {
    group1345: "/img/group-1341@1x.png",
    group1349: "/img/group-1348-1@1x.png",
    group1354: "/img/group-1350@1x.png",
    group1358: "/img/group-1357-1@1x.png",
    group1336: "/img/group-1332@1x.png",
    group1340: "/img/group-1339-1@1x.png",
    rectangle1085: "/img/rectangle-1085@1x.png",
    rectangle1084: "/img/map2-parking1@1x.png",
    map: "/img/map@1x.png",
    lamminfowindow: "/img/group-49-1@1x.png",
    group1326: "/img/group-1325-1@1x.png",
    group52: "/img/group-1324@1x.png",
    group1331: "/img/group-1324-1@1x.png",
    mapNav1Props: mapNav5Data,
    mapNav2Props: mapNav6Data,
};

const group23Data = {
    className: "group-2-2",
};

const feedNav3Data = {
    className: "feed-nav-2",
};

const mapNav7Data = {
    className: "map-nav-5",
};

const lAMMapp1Data = {
    overlapGroup9: "/img/map2-parking1@1x.png",
    path7: "/img/path-14@1x.png",
    group4: "/img/group-3@1x.png",
    dotselector3: "/img/dotselector3-1@1x.png",
    dotselector2: "/img/dotselector2@1x.png",
    dotselector1: "/img/dotselector2@1x.png",
    group2Props: group23Data,
    feedNavProps: feedNav3Data,
    mapNavProps: mapNav7Data,
};

const feedNav4Data = {
    className: "feed-nav-3",
};

const mapNav8Data = {
    className: "map-nav-6",
};

const lAMMapp2Data = {
    map2_Parking1: "/img/map2-parking1@1x.png",
    map: "/img/map-1@1x.png",
    dotselector31: "/img/dotselector3@1x.png",
    dotselector21: "/img/dotselector2@1x.png",
    dotselector11: "/img/dotselector1@1x.png",
    lamminfowindow: "/img/group-49-1@1x.png",
    dotselector32: "/img/dotselector2@1x.png",
    dotselector22: "/img/dotselector2-1@1x.png",
    dotselector12: "/img/dotselector2@1x.png",
    feedNavProps: feedNav4Data,
    mapNavProps: mapNav8Data,
};

const header4Data = {
    className: "header-2",
};

const feedNav5Data = {
    className: "feed-nav-4",
};

const mapNav9Data = {
    className: "map-nav-7",
};

const contactNav3Data = {
    className: "contact-nav-2",
};

const iPhone1312ProMax1Data = {
    map: "/img/map@1x.png",
    path3: "/img/dotselector3@1x.png",
    path4: "/img/dotselector2@1x.png",
    path2: "/img/dotselector1@1x.png",
    group4: "/img/group-49@1x.png",
    group11: "/img/group-16@1x.png",
    group13: "/img/group-18@1x.png",
    overlapGroupContainer: "/img/group-20@1x.png",
    headerProps: header4Data,
    feedNavProps: feedNav5Data,
    mapNavProps: mapNav9Data,
    contactNavProps: contactNav3Data,
};

