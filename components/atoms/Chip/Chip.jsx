import { Wrapper } from "./Chip.styled.jsx";

const Chip = ({ children, href, onClick, inverted = false }) => {

  return (
    <Wrapper inverted={inverted} onClick={onClick} href={href}>
      {children}
    </Wrapper>
  );
}


export default Chip;
