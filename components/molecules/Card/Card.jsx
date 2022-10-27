import {
  Wrapper,
  Image,
  Text,
  TextMobile,
  ImageWrapper,
} from "./Card.styled.jsx";
import { FeatureAnimation } from "common_components/atoms";

const Card = ({ h2, h3, p, imgAlt, inverted = false, bg }) => {
  return (
    <Wrapper inverted={inverted} bg={bg}>
      <Text>
        {h2 && <h2>{h2}</h2>}
        {h3 && <h3>{h3}</h3>}
        {p && <p>{p}</p>}
      </Text>
      <ImageWrapper>

        <FeatureAnimation
          animationData={imgAlt}
          size="full"
          backgroundColor={'linear-gradient(0deg, rgba(71,17,188,1) 0%, rgba(154,144,255,1) 100%);'}
        />
      </ImageWrapper>
    </Wrapper>
  );
}

export default Card;
