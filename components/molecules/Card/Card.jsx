import { Wrapper, Image, Center } from "./Card.styled.jsx";

const Card = ({ h1, h2, p, imgSrc, imgAlt, inverted = false, bg }) => (
  <Wrapper inverted={inverted} bg={bg}>
    <Center>
      <div>
        {h1 && <h1>{h1}</h1>}
        {h2 && <h2>{h2}</h2>}
        {p && <p>{p}</p>}
      </div>
    </Center>
    <div>
      <Image src={imgSrc} alt={imgAlt} />
    </div>
  </Wrapper>
);

export default Card;
