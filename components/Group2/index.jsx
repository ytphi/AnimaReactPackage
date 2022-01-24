import React from "react";
import styled from "styled-components";


function Group2(props) {
  const { className } = props;

  return (
    <Group21 className={`group-2 ${className || ""}`}>
      <Group1 className="group-1">
        <OverlapGroupContainer className="overlap-group-container">
          <PathContainer className="path-container">
            <Path2 className="path-2" src="/img/path-2@1x.png" />
            <Path3 className="path-3" src="/img/path-3@1x.png" />
          </PathContainer>
          <OverlapGroup2 className="overlap-group2-1">
            <Path4 className="path-4" src="/img/path-4@1x.png" />
          </OverlapGroup2>
          <OverlapGroup4 className="overlap-group4">
            <Path4 className="path-5" src="/img/path-4@1x.png" />
          </OverlapGroup4>
          <OverlapGroup1 className="overlap-group1-1">
            <Rectangle963 className="rectangle-963"></Rectangle963>
            <Rectangle964 className="rectangle-964"></Rectangle964>
            <Rectangle965 className="rectangle-965"></Rectangle965>
            <Rectangle966 className="rectangle-966"></Rectangle966>
            <Path6 className="path-6" src="/img/path-6@1x.png" />
            <Group15 className="group-15">
              <Group14 className="group-14">
                <Group13 className="group-13"></Group13>
                <Group11 className="group-11"></Group11>
              </Group14>
            </Group15>
          </OverlapGroup1>
        </OverlapGroupContainer>
      </Group1>
    </Group21>
  );
}

const Group21 = styled.div`
  position: absolute;
  width: 155px;
  height: 49px;
  top: 28px;
  left: 199px;
  display: flex;
`;

const Group1 = styled.div`
  flex: 1;
  width: 155.02801513671875px;
  display: flex;
  align-items: flex-start;
`;

const OverlapGroupContainer = styled.div`
  height: 40px;
  margin-top: 0;
  display: flex;
  padding: 2.1px 2.1px;
  align-items: flex-start;
  min-width: 155px;
  background-image: url(/img/path-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const PathContainer = styled.div`
  height: 36px;
  display: flex;
  padding: 8.2px 2.9px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 36px;
  background-color: var(--glacier);
`;

const Path2 = styled.img`
  width: 11px;
  height: 20px;
  align-self: center;
  margin-top: 0.01px;
  object-fit: cover;
`;

const Path3 = styled.img`
  width: 17px;
  height: 20px;
  margin-left: 1px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  height: 36px;
  margin-left: 2px;
  display: flex;
  padding: 6.9px 6px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 36px;
  background-color: var(--glacier);
`;

const Path4 = styled.img`
  width: 24px;
  height: 22px;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  height: 36px;
  margin-left: 2px;
  display: flex;
  padding: 6.9px 6px;
  align-items: flex-start;
  min-width: 36px;
  background-color: var(--glacier);
`;

const OverlapGroup1 = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  margin-left: 2px;
  background-color: var(--glacier);
`;

const Rectangle963 = styled.div`
  position: absolute;
  width: 1px;
  height: 3px;
  top: 21px;
  left: 15px;
  background-color: var(--botticelli);
`;

const Rectangle964 = styled.div`
  position: absolute;
  width: 1px;
  height: 3px;
  top: 25px;
  left: 15px;
  background-color: var(--botticelli);
`;

const Rectangle965 = styled.div`
  position: absolute;
  width: 1px;
  height: 3px;
  top: 21px;
  left: 21px;
  background-color: var(--botticelli);
`;

const Rectangle966 = styled.div`
  position: absolute;
  width: 1px;
  height: 3px;
  top: 25px;
  left: 21px;
  background-color: var(--botticelli);
`;

const Path6 = styled.img`
  position: absolute;
  width: 13px;
  height: 31px;
  top: 4px;
  left: 12px;
  object-fit: cover;
`;

const Group15 = styled.div`
  position: absolute;
  width: 36px;
  height: 5px;
  top: 4px;
  left: 0;
  display: flex;
`;

const Group14 = styled.div`
  flex: 1;
  width: 36.3470458984375px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const Group13 = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  width: 16.6929931640625px;
  background-image: url(/img/group-12@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group11 = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  width: 16.69293212890625px;
  margin-right: 0;
  background-image: url(/img/group-10@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group12 = styled.div`
  .group-2.group-2-2 & {
    justify-content: center;
    overflow: hidden;
  }
`;

const Group111 = styled.div`
  .group-2.group-2-2 & {
    width: 16.6929931640625px;
  }
`;

export default Group2;
