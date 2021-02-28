import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import covidImg from "../../images/covidImg.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 820px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${covidImg});
  background-size: cover;
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0%, 50%);
`;

export const HeroH1 = styled.h1`
  margin-top: 200px;
  color: #fff;
  text-shadow: 5px 5px #000;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-weight: bold;
  text-shadow: 3px 3px #000;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  } ;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
