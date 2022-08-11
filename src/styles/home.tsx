import { css } from "styled-components";

const layout = css`
  width: 90%;
  max-width: 80rem;
  margin-inline: auto;
  margin-top: 2.5rem;
  & > div {
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 950px) {
    & > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const emptyState = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  & h1 {
    font-size: 3rem;
  }
  & p {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export { layout, emptyState };
