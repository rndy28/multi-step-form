import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import type { Position, Size } from "types";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  elementSize: Size;
  variant: "primary" | "outline";
  withIcon?: {
    position: Position;
  };
}

type StyledProps = Pick<Props, "variant" | "elementSize">;

const sm = css`
  height: 2.2rem;
  max-width: 20rem;
`;

const md = css`
  height: 2.5rem;
  max-width: 25rem;
`;

const lg = css`
  height: 3rem;
  max-width: 35rem;
`;

const primary = css`
  background-color: #f7f8fb;
  color: #4c566a;
  border: 2px solid transparent;
  & .icon {
    color: #828997;
  }
  &:focus-within:not([aria-invalid="true"]) {
    border-color: #d8dee9;
  }
`;

const outline = css`
  background-color: transparent;
  border: 2px solid #d8dee9;
  color: #000000;
  caret-color: #694ec2;
  svg {
    color: #babfc7;
  }
  &:focus-within:not([aria-invalid="true"]) {
    border-color: #694ec2;
    svg {
      color: #694ec2;
    }
  }
`;

const baseInput = css<StyledProps>`
  width: 100%;
  padding-inline: 1rem;
  border-radius: 0.4rem;
  outline: none;
  transition: all 150ms ease-in;
  position: relative;
  ${(p) => p.elementSize === "sm" && sm}
  ${(p) => p.elementSize === "md" && md}
  ${(p) => p.elementSize === "lg" && lg}
  ${(p) => p.variant === "primary" && primary}
  ${(p) => p.variant === "outline" && outline}
  &::placeholder {
    color: #828997;
  }
`;

const StyledInput = styled.input<StyledProps>`
  ${baseInput}
  ${(p) =>
    p["aria-invalid"] &&
    css`
      border-color: #bf616a;
    `}
`;

const Wrapper = styled.div<
  {
    position: Position;
    invalid: boolean;
  } & StyledProps
>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  ${baseInput}
  ${StyledInput} {
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding-inline: 0;
  }
  ${(p) =>
    p.invalid &&
    css`
      border-color: #bf616a !important;
    `}
  ${(p) =>
    p.position === "right" &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ children, withIcon, elementSize, variant, ...props }, ref) => {
    if (withIcon) {
      return (
        <Wrapper
          position={withIcon.position}
          invalid={props["aria-invalid"] as boolean}
          elementSize={elementSize}
          variant={variant}
        >
          {children}
          <StyledInput ref={ref} elementSize={elementSize} variant={variant} {...props} />
        </Wrapper>
      );
    }
    return <StyledInput ref={ref} elementSize={elementSize} variant={variant} {...props} />;
  }
);

Input.displayName = "input";

export default Input;
