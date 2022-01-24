import React from "react";
import styled from "styled-components";


function ContactNav(props) {
  const { className } = props;

  return (
    <ContactNav1 className={`contact-nav ${className || ""}`}>
      <GroupContainer className="group-container-8">
        <Group46 className="group-46"></Group46>
        <Group48 className="group-48"></Group48>
      </GroupContainer>
    </ContactNav1>
  );
}

const ContactNav1 = styled.div`
  position: absolute;
  height: 68px;
  top: 181px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 196px;
  transition: all 0.2s ease;
  background-image: url(/img/group-43@1x.png);
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &.contact-nav.contact-nav-2 {
    top: 268px;
  }

  &:hover {
    transform: translate(128px, 0);
  }
`;

const GroupContainer = styled.div`
  width: 196px;
  height: 68px;
  position: relative;
`;

const Group46 = styled.div`
  position: absolute;
  width: 41px;
  height: 37px;
  top: 15px;
  left: 139px;
  background-image: url(/img/group-45@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group48 = styled.div`
  position: absolute;
  width: 196px;
  height: 68px;
  top: 0;
  left: 0;
  background-image: url(/img/group-47@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

export default ContactNav;
