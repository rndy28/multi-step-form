/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import { IconCheck } from "@tabler/icons";
import { Flex } from "components/atoms/shared";
import styled, { css } from "styled-components";
import { useSteps } from "context/StepsContext";
import type { StepT } from "types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  @media (min-width: 950px) {
    gap: 3rem;
    max-width: 17rem;
    &::after {
      content: "";
      position: absolute;
      right: 1rem;
      top: -0.8rem;
      width: 2px;
      height: 20rem;
      background-color: #f5f5f5;
    }
  }
`;

const Step = styled.div<{ status: StepT["status"] }>`
  border-width: 1px;
  border-style: solid;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  z-index: 2;
  ${(p) => {
    // eslint-disable-next-line default-case
    switch (p.status) {
      case "done":
        return css`
          color: #a3be8c;
          border-color: #a3be8c;
          background-color: #fff;
        `;
      case "filling":
        return css`
          background-color: #8362f2;
          color: #fff;
          border-color: transparent;
        `;
      case "not yet":
        return css`
          border-color: #8362f2;
          color: #8362f2;
          background-color: #fff;
        `;
    }
  }}
`;

const Title = styled.h2`
  color: #5e6779;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Group = styled(Flex)`
  flex-direction: column-reverse;
  gap: 0.5rem;
  width: 11rem;
  text-align: center;
  @media (min-width: 950px) {
    flex-direction: row;
    width: 100%;
    text-align: start;
  }
`;

const Steps = () => {
  const { steps, setSteps } = useSteps();
  const location = useLocation();

  useEffect(() => {
    setSteps((prev) =>
      prev.map((step) =>
        location.pathname.includes(step.pathname)
          ? { ...step, status: "filling" }
          : step.status !== "done"
          ? { ...step, status: "not yet" }
          : step
      )
    );
  }, [location]);

  return (
    <Container>
      {steps.map(({ id, title, status }) => (
        <Group key={id} alignItems="center" justifyContent="space-between">
          <Title>{title}</Title>
          <Step status={status}>
            {status === "done" && <IconCheck />}
            {(status === "not yet" || status === "filling") && id}
          </Step>
        </Group>
      ))}
    </Container>
  );
};

export default Steps;
