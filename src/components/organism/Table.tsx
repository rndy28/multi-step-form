/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import React from "react";

const BaseCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: rgba(17, 12, 46, 0.1) 0px 20px 120px 0px;
  @media (min-width: 950px) {
    box-shadow: none;
  }
`;

const BaseTable = css`
  display: table;
  width: 100%;
  border-collapse: collapse;
  padding: 0.8rem;
`;

const BaseText = css`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Container = styled.div`
  margin-block: 1rem;
  @media (min-width: 950px) {
    ${BaseTable};
    box-shadow: rgba(17, 12, 46, 0.1) 0px 15px 200px 0px;
    overflow: hidden;
    border-radius: 0.4rem;
  }
`;

const Text = styled.span`
  ${BaseText};
  max-width: 200px;
  font-size: 0.813rem;
  font-weight: 400;
  color: #161f40;
`;

const Tr = styled(BaseCard)`
  @media (min-width: 950px) {
    display: table-row;
  }
`;

const Th = styled.h4<{ centered?: boolean }>`
  font-size: 0.9rem;
  color: #667197;
  text-transform: capitalize;
  font-weight: 600;
  @media (min-width: 950px) {
    display: table-cell;
    text-align: ${(props) => (props.centered ? "center" : "left")};
    padding: 0.8rem;
  }
`;

const Td = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
  &:nth-of-type(2) ${Text} {
    max-width: 50%;
    @media (min-width: 670px) {
      max-width: 60%;
    }
    @media (min-width: 950px) {
      max-width: 70%;
    }
    @media (min-width: 1200px) {
      max-width: 75%;
    }
    @media (min-width: 1400px) {
      max-width: 80%;
    }
  }
  @media (min-width: 950px) {
    all: unset;
    display: table-cell;
    padding-inline: 0.8rem;
    &:nth-child(even) {
      background-color: transparent;
    }
    & ${Th} {
      display: none;
    }
  }
`;

const Head = styled.div`
  display: none;
  @media (min-width: 950px) {
    display: table-header-group;
    ${Tr} {
      background-color: #8362f2;
    }
    ${Tr} ${Th} {
      color: #fff;
      font-weight: 600;
    }
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  @media (min-width: 950px) {
    display: table-row-group;
    ${Tr} ${Td} {
      vertical-align: middle;
      padding-block: 0.5rem;
    }
    ${Tr}:nth-child(even) {
      background-color: #fcf9f9;
    }
  }
`;

export type TableProps<T extends object> = {
  data: T[];
  head: string[];
  onDelete: (id: string) => void;
  onEdit: (data: T) => void;
};

const Table = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

Table.Head = Head;

Table.Body = Body;

Table.Tr = Tr;

Table.Th = Th;

Table.Td = Td;

Table.Text = Text;

export default Table;
