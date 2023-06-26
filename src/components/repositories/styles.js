import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const RepoTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  padding: 24px 48px;
`;

export const RepoTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
RepoTabList.tabsRole = "TabList";

export const RepoTab = styled(Tab)`
  border-radius: 30px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  margin: 8px;
  
  &:focus {
    outline: none;

  }

  &.is-selected {
    background-color: #fafaf5;
    color: #22272e;
  }
`;
RepoTab.tabsRole = "Tab";

export const RepoTabPanel = styled(TabPanel)`

  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
RepoTabPanel.tabsRole = "TabPanel";

export const RepoList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;