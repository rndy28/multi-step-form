import React, { ForwardedRef, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
import type { Size } from "types";

type StyledButtonProps = {
  variant: "primary" | "secondary"; // other variant here
  size: Size;
};

interface Props extends React.ComponentPropsWithoutRef<"button">, StyledButtonProps {}

interface PropsLink extends LinkProps, StyledButtonProps {}

const sm = css`
  height: 2.4rem;
  max-width: 8rem;
`;

const md = css`
  height: 2.7rem;
  max-width: 11rem;
`;

const lg = css`
  height: 3rem;
  font-size: 1.1rem;
  max-width: 14rem;
`;

const primary = css`
  background-color: #8362f2;
  color: #f7f8fb;
  &:hover {
    background-color: #9c81f5;
  }
`;

const secondary = css`
  background-color: #f3f6fc;
  color: #8362f2;
  &:hover {
    background-color: #eeeefd;
  }
`;

const baseBtn = css<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  width: 100%;
  font-size: 0.95rem;
  transition: all 250ms ease;
  font-weight: 600;
  ${(p) => p.size === "sm" && sm}
  ${(p) => p.size === "md" && md}
  ${(p) => p.size === "lg" && lg}
  ${(p) => p.variant === "primary" && primary}
  ${(p) => p.variant === "secondary" && secondary}
`;

const Container = styled.button<StyledButtonProps>`
  ${baseBtn}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
  ${baseBtn}
`;

const Button = forwardRef<unknown, Props | PropsLink>(({ children, size, ...props }, ref) => {
  return "to" in props ? (
    <StyledLink size={size} role="button" ref={ref as ForwardedRef<HTMLAnchorElement>} {...props}>
      {children}
    </StyledLink>
  ) : (
    <Container size={size} ref={ref as ForwardedRef<HTMLButtonElement>} {...props}>
      {children}
    </Container>
  );
});

Button.displayName = "Button";

export default Button;
