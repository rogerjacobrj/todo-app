import React from "react";
import styled, { css } from "styled-components";

interface TabSectionItemProps {
  isActive: boolean;
}

const TabSectionItem = styled.div`
  margin: 0 0.5rem;
  color: ${(props) => props.theme.text};

  &:hover {
    cursor: pointer;
    color: #4b7ad6;
  }

  ${(props: TabSectionItemProps) =>
    props.isActive &&
    css`
      color: #4b7ad6;
    `}
`;

interface TabsProps {
  tabClick: (type: string) => void;
  activeTab: string;
}

const Tabs = (props: TabsProps) => {
  const { tabClick, activeTab } = props;

  return (
    <>
      <TabSectionItem
        isActive={activeTab === "all"}
        onClick={() => tabClick("all")}
      >
        All
      </TabSectionItem>
      <TabSectionItem
        isActive={activeTab === "active"}
        onClick={() => tabClick("active")}
      >
        Active
      </TabSectionItem>
      <TabSectionItem
        isActive={activeTab === "completed"}
        onClick={() => tabClick("completed")}
      >
        Completed
      </TabSectionItem>
    </>
  );
};


export default Tabs;
