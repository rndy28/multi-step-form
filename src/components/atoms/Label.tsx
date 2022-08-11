import styled from "styled-components";
import React from "react";

const Container = styled.label`
  font-size: 0.9rem;
  color: #4c566a;
  margin-bottom: 0.4rem;
`;

interface Props extends React.ComponentPropsWithoutRef<"label"> {}

const Label = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

export default Label;
