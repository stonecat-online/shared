import { Wrapper } from "./Chip.styled.jsx";
import Repeat from "../../icons/Repeat";

const Chip = ({ children, href, onClick, inverted = false }) => (
  <Wrapper inverted={inverted} onClick={onClick} href={href}>
    <Repeat />
  </Wrapper>
);

export default Chip;
