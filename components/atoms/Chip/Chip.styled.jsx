import styled from "styled-components";

export const Wrapper = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ inverted }) =>
    inverted ? "var(--csecondary)" : "var(--cprimary)"};
  width: 5.8rem;
  height: 5.8rem;
  background-color: ${({ inverted }) =>
    inverted ? "var(--cprimary)" : "var(--csecondary)"};
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  
  & svg {
    width: 2.5rem;
  }
`;

export const AnimationPositioner = styled.div`
  position: absolute;
  z-index: -1
`