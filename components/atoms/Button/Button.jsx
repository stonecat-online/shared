import { Wrapper } from "./Button.styled";

const Button = ({ children, onClick, inverted = false }) => (
  <Wrapper onClick={onClick} inverted={inverted}>
    {children}
  </Wrapper>
);

export default Button;
