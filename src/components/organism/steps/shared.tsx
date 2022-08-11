import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.form)`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 10rem;
  max-height: 15rem;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar-thumb {
    background-color: #787a91;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  & > div {
    width: inherit;
  }
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
`;

export const Title = styled.h2`
  color: #694ec2;
`;

export const EmptyState = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
