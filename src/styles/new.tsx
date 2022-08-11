import { css } from "styled-components";

const layout = css`
  width: 90%;
  max-width: 60rem;
  margin-inline: auto;
  margin-top: 2rem;

  & h1 {
    margin-bottom: 0.3rem;
  }
`;

const wrapper = css`
  width: 100%;
  margin-top: 3rem;
  gap: 2rem;
  max-width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export { layout, wrapper };
