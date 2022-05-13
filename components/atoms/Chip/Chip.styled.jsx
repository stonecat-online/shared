import styled from "styled-components";

export const Wrapper = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ inverted }) =>
    inverted ? "var(--csecondary)" : "var(--cprimary)"};
  width: 5rem;
  height: 5rem;
  background-color: ${({ inverted }) =>
    inverted ? "var(--cprimary)" : "var(--csecondary)"};
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid
    ${({ inverted }) => (inverted ? "var(--csecondary)" : "var(--cprimary)")};
`;
