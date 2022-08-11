import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 0.813rem;
  font-weight: 500;
  color: #f26565;
  margin-top: 0.2rem;
`;

interface Props extends React.ComponentPropsWithoutRef<"span"> {}

const Error = ({ children, ...props }: Props) => {
  return (
    <Container {...props} role="alert">
      {children}
    </Container>
  );
};

export default Error;
