import styled from "styled-components";

export const Wrapper = styled.button`
  font-family: var(--ff2);
  font-size: var(--b1);
  padding: 1rem 3rem;
  border-radius: var(--bradius);
  cursor: pointer;
  background-color: ${({ inverted }) =>
    inverted ? "var(--cprimary)" : "var(--csecondary)"};
  color: ${({ inverted }) =>
    inverted ? "var(--csecondary)" : "var(--cprimary)"};
  border: 1px solid var(--csecondary);
`;
