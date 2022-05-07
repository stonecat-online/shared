import * as React from "react";
import Wrapper from "./TextTitleParagraph.styles";

interface Props {
  title: string;
  paragraph: string;
  link: string;
  linkRedirect: string;
}

const TextTitleParagraph: React.SFC<Props> = ({
  title,
  paragraph,
  link,
  linkRedirect,
}) => (
    <Wrapper>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      {link && (<a href={linkRedirect} >{link}</a>)}
    </Wrapper>
  );

export default TextTitleParagraph;
