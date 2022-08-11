/* eslint-disable no-nested-ternary */
import React from "react";
import styled, { keyframes, css } from "styled-components";
import type { Size } from "types";

const rotate = keyframes`
   100% {transform: rotate(1turn)}
`;

const Container = styled.div<{ size: Size; centered?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  & > div {
    width: ${(p) => (p.size === "lg" ? "50" : p.size === "md" ? "35" : "25")}px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: ${(p) => (p.size === "lg" ? "5" : p.size === "md" ? "4" : "3")}px solid #0000;
    border-right-color: #694ec2;
    position: relative;
    animation: ${rotate} 1s infinite linear;
  }
  & > div:before,
  & > div:after {
    content: "";
    position: absolute;
    inset: -${(p) => (p.size === "lg" ? "5" : p.size === "md" ? "4" : "3")}px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
  }
  & > div:after {
    animation-duration: 4s;
  }

  ${(p) =>
    p.centered &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}
`;

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  size?: Size;
  centered?: boolean;
}

const Loader = ({ size = "lg", ...props }: Props) => {
  return (
    <Container size={size} {...props}>
      <div />
    </Container>
  );
};

export default Loader;
