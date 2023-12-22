import { MainHeading } from "../Layout/styled";
import {
  HistoryContainer,
  HistoryImgContainer,
  HistoryImgOne,
  HistoryImgThree,
  HistoryImgTwo,
  HistoryText,
  HistoryTextContainer,
  SecondaryHeading,
} from "./styled";
import Img1 from "../../assets/image00001.jpeg";
import Img3 from "../../assets/image00003.jpeg";
import Img25 from "../../assets/image00025.jpeg";

export const History = () => {
  return (
    <>
      <MainHeading>Krótka historia Młyna</MainHeading>
      <HistoryContainer>
        <HistoryTextContainer>
          <SecondaryHeading>Młyn kiedyś</SecondaryHeading>
          <HistoryText>
            Młyn z 1827r. zlokalizowany na ul. Sienkiewicza 89 w Żywcu, został
            wybudowany przez Franciszka Augustina. Młyn od 1828r. należy
            nieprzerwanie do 7 pokoleń rodziny Zyzaków. Obiekt jest nieczynny od
            1998r.
          </HistoryText>
          <HistoryText>
            Młyn jest z zewnątrz murowany, a od wewnątrz drewniany. Z początku
            był jedynie młynem wodnym, a od 1956r. był już elektryczny w związku
            z zasypaniem Młynówki, której pozostałość do dzisiaj płynie przez
            Żywiecki Park wpadając do rzeki Soły. Młyn był pierwszym budynkiem
            przed wejściem do centrum Żywca, gdzie ludzie z okolicznych wsi
            przychodzili boso i oczyszczali stopy w płynącej przy nim Młynówce,
            aby móc wejśc do miasta w butach.
          </HistoryText>
          <SecondaryHeading>Młyn dzisiaj</SecondaryHeading>
          <HistoryText>
            Obecnie Młyn należy do Aleksandry Bielawskiej, z rodziny Zyzaków.
            Planowane jest otwarcie skansenu umożliwiającego zachowanie dawnego
            klimatu i wyjątkowego wyglądu.
          </HistoryText>
        </HistoryTextContainer>
        <HistoryImgContainer>
          <HistoryImgOne src={Img25}></HistoryImgOne>
          <HistoryImgTwo src={Img1}></HistoryImgTwo>
          <HistoryImgThree src={Img3}></HistoryImgThree>
        </HistoryImgContainer>
      </HistoryContainer>
    </>
  );
};
