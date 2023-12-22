import { MainHeading } from "../Layout/styled";
import Img4 from "../../assets/image00004.jpeg";
import {
  ContactContainer,
  ContactImg,
  ContactAllText,
  ContactElement,
} from "./styled";

export const Contact = () => {
  return (
    <>
      <MainHeading>Zapraszamy do kontaktu!</MainHeading>
      <ContactContainer>
        <ContactAllText>
          <ContactElement>
            Adres: ul. Sienkiewicza 89, 34-300 Żywiec
          </ContactElement>
          <ContactElement>e-mail: FundacjaMlynZyzakow@gmail.com</ContactElement>
          <ContactElement>Telefon: 695 832 759</ContactElement>
        </ContactAllText>
        <ContactImg src={Img4} style={{ width: "20%" }}></ContactImg>
      </ContactContainer>
    </>
  );
};
