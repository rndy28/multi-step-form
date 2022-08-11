import { css } from "styled-components";

const layout = css`
  padding: 2rem;
  & article {
    width: 80%;
    max-width: 20rem;
    border: 2px solid #8362f2;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 0.45rem;
    margin-inline: auto;
    padding: 0.8rem;
    & span {
      font-weight: 500;
    }
    & p + p {
      margin-top: 1rem;
    }

    @media (min-width: 650px) {
      max-width: 30rem;
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

export { layout };
