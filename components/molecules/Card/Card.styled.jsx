import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 14rem;
  margin: 1rem 0;
  color: ${({ inverted }) =>
    inverted ? "var(--cprimary)" : "var(--csecondary)"};
  border-radius: var(--bradius);
  overflow: hidden;
  background-color: ${({ bg }) => bg};
  box-shadow: 0 70px 140px 0 rgb(130 136 171 / 20%);
  cursor: pointer;
  
  ${({ theme }) => theme.mq.atTablet`
    flex-direction: row;
  `}


  & > div {
    height: 100%;
    
    ${({ theme }) => theme.mq.atTablet`
        width: 50%;
    `}

  }

  & > div:nth-child(2) {
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.mq.atTablet`
      width: 50%;
      height: 100%;
    `}
  }

  & h2 {
    margin-top: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Text = styled.div`
  padding: 3rem 2rem;
  text-align: left;
  ${({ theme }) => theme.mq.atTablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 3rem;

  `}

  & > * {
    width: 100%;
  }

`;

export const TextMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  background: none;
  padding: 3rem;
  ${({ theme }) => theme.mq.atTablet`
    display: none;
  `}
`;

export const Image = styled.img`
  object-fit: cover;
`;
