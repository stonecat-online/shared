import { Wrapper } from "./Button.styled";

const Button = ({ onClick, inverted = false }) => (
  <Wrapper onClick={onClick} inverted={inverted}>
    {"Project"}
  </Wrapper>
);

export default Button;
