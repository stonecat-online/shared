import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  min-height: 225px;
  max-height: 400px;
  color: ${({ inverted }) =>
    inverted ? "var(--cprimary)" : "var(--csecondary)"};
  border: 1px solid
    ${({ inverted }) => (inverted ? "var(--cprimary)" : "var(--csecondary)")};
  border-radius: var(--bradius);
  overflow: hidden;
  background-color: ${({ bg }) => bg};

  & > div {
    width: 50%;
  }

  & > div:nth-child(2) {
    width: 100%;

    ${({ theme }) => theme.mq.atTablet`
      width: 50%;
    `}
  }

  & h2 {
    margin-top: 1rem;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img`
  object-fit: cover;
`;
