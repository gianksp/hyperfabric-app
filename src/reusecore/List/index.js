import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItemWrapper = styled.li``;

export const List = ({ children, ...props }) => {
  const AllClasses = ["list"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <ListWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </ListWrapper>
  );
};

export const ListItem = ({ children, ...props }) => {
  const AllClasses = ["list__item"];
  if (props.className) {
    AllClasses.push(props.className);
  }
  return (
    <ListItemWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </ListItemWrapper>
  );
};
