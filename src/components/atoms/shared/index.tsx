import React from "react";
import styled from "styled-components";

type FlexT = {
  direction: React.CSSProperties["flexDirection"];
  justifyContent: React.CSSProperties["justifyContent"];
  alignItems: React.CSSProperties["alignItems"];
  flex: React.CSSProperties["flex"];
  flexWrap: React.CSSProperties["flexWrap"];
  gap: React.CSSProperties["gap"];
};

export const Flex = styled.div<Partial<FlexT>>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  gap: ${(p) => p.gap};
  flex-wrap: ${(p) => p.flexWrap};
  flex: ${(p) => p.flex};
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
