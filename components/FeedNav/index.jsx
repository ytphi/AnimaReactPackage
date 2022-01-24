import React from "react";
import styled from "styled-components";


function FeedNav(props) {
  const { className } = props;

  return (
    <FeedNav1 className={`feed-nav ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1">
        <Group32 className="group-32"></Group32>
        <Path87 className="path-87" src="/img/path-87@1x.png" />
        <Group34 className="group-34"></Group34>
      </OverlapGroup1>
    </FeedNav1>
  );
}

const FeedNav1 = styled.div`
  position: absolute;
  height: 69px;
  top: 2820px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 196px;
  transition: all 0.2s ease;
  background-image: url(/img/group-29@1x.png);
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &.feed-nav.feed-nav-2 {
    top: 364px;
  }

  &.feed-nav.feed-nav-3 {
    top: 364px;
  }

  &.feed-nav.feed-nav-4 {
    top: 451px;
  }

  &:hover {
    transform: translate(128px, 0);
  }
`;

const OverlapGroup1 = styled.div`
  width: 196px;
  height: 69px;
  position: relative;
`;

const Group32 = styled.div`
  position: absolute;
  width: 31px;
  height: 38px;
  top: 15px;
  left: 139px;
  background-image: url(/img/group-31-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Path87 = styled.img`
  position: absolute;
  width: 12px;
  height: 18px;
  top: 25px;
  left: 20px;
  object-fit: cover;
`;

const Group34 = styled.div`
  position: absolute;
  width: 196px;
  height: 69px;
  top: 0;
  left: 0;
  background-image: url(/img/group-33@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

export default FeedNav;
