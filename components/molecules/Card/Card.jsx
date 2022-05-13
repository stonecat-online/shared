import {
  Wrapper,
  Image,
  Text,
  TextMobile,
  ImageWrapper,
} from "./Card.styled.jsx";

const Card = ({ h1, h2, p, imgSrc, imgAlt, inverted = false, bg }) => (
  <Wrapper inverted={inverted} bg={bg}>
    <Text>
      <div>
        {h1 && <h1>{h1}</h1>}
        {h2 && <h2>{h2}</h2>}
        {p && <p>{p}</p>}
      </div>
    </Text>
    <ImageWrapper>
      <TextMobile>
        <div>
          {h1 && <h1>{h1}</h1>}
          {h2 && <h2>{h2}</h2>}
          {p && <p>{p}</p>}
        </div>
      </TextMobile>
      <Image src={imgSrc} alt={imgAlt} />
    </ImageWrapper>
  </Wrapper>
);

export default Card;
