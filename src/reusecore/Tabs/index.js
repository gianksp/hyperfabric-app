import React from "react";

import {
  TabsWrapper,
  TabListWrapper,
  TabItemWrapper,
  TabPanelWrapper,
} from "./tabs.style";

const Tabs = ({children, ...props}) => {
  // Add all classs to an array
  const addAllClasses = ["reusecore__tabs__wrapper"];

  // className prop checking
  if (props.className) {
    addAllClasses.push(className);
  }

  return (
    <TabsWrapper className={addAllClasses.join(" ")} {...props}>
      {children}
    </TabsWrapper>
  );
};

const Tab = ({children, ...props}) => {
  // Add all classs to an array
  const addAllClasses = ["reusecore__tab__item"];

  // className prop checking
  if (props.className) {
    addAllClasses.push(className);
  }

  return (
    <TabItemWrapper className={addAllClasses.join(" ")} {...props}>
      {children}
    </TabItemWrapper>
  );
};

const TabList = ({children, ...props}) => {
  // Add all classs to an array
  const addAllClasses = ["reusecore__tab__list"];

  // className prop checking
  if (props.className) {
    addAllClasses.push(className);
  }

  return (
    <TabListWrapper className={addAllClasses.join(" ")} {...props}>
      {children}
    </TabListWrapper>
  );
};



const TabPanel = ({children, className}) => {
  // Add all classs to an array
  const addAllClasses = ["reusecore__tab__panel"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <TabPanelWrapper className={addAllClasses.join(" ")}>
      {children}
    </TabPanelWrapper>
  );
};


export { Tab, Tabs, TabList, TabPanel };
