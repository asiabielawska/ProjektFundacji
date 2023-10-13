import { MainHeading } from "../Layout/styled";
import {
  AboutFundationContainer,
  AboutFundationImg,
  TextWithBackground,
} from "./styled";
import ImgOfMlyn from "../../assets/młynmain2.jpg";

export const AboutFundation = () => {
  return (
    <>
      <MainHeading>O Fundacji</MainHeading>
      <AboutFundationContainer>
        <TextWithBackground>
          Fundacja zlokalizowana w starym Młynie w Żywcu z unikatową historią.
          Parę zdań o fundacji. Parę zdań o fundacji. Parę zdań o fundacji. Parę
          zdań o fundacji. Parę zdań o fundacji. Parę zdań o fundacji. Parę zdań
          o fundacji. Parę zdań o fundacji. Parę zdań o fundacji. Parę zdań o
          fundacji. Parę zdań o fundacji. Parę zdań o fundacji. Parę zdań o
          fundacji. Parę zdań o fundacji. Parę zdań o fundacji. Parę zdań o
          fundacji. Parę zdań o fundacji. Parę zdań o fundacji. Parę zdań o
          fundacji. Parę zdań o fundacji.
        </TextWithBackground>
        <AboutFundationImg src={ImgOfMlyn}></AboutFundationImg>
      </AboutFundationContainer>
    </>
  );
};
