import {
  Container,
  ImgContainer,
  ImgOne,
  ImgThree,
  ImgTwo,
  Text,
  TextContainer,
  SecondaryHeading,
  Heading,
} from "./styled";
import Img1 from "../../assets/image00001.webp";
import Img3 from "../../assets/image00003.webp";
import Img25 from "../../assets/image00025.jpeg";

export const History = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Heading>Krótka historia Młyna Zyzaków</Heading>
          <SecondaryHeading>Młyn kiedyś</SecondaryHeading>
          <Text>
            Młyn z 1827&nbsp;r. zlokalizowany przy ul. Sienkiewicza&nbsp;89
            w&nbsp;Żywcu został wybudowany przez księdza Franciszka Augustina
            dla jego siostry Apolonii Selarin. Po około pięćdziesięciu latach od
            momentu wybudowania odkupiła go rodzina Zyzaków i&nbsp;od tamtego
            czasu nieprzerwanie należy do siódmego już pokolenia tej rodziny.
            Obiekt jest nieczynny od 1998&nbsp;r.
          </Text>
          <Text>
            Z zewnątrz młyn jest murowany, a&nbsp;od wewnątrz drewniany.
            Pierwotnie był jedynie młynem wodnym, a&nbsp;od 1956&nbsp;r. już
            elektrycznym w&nbsp;związku z&nbsp;zasypaniem Młynówki, której
            pozostałość do dzisiaj płynie przez żywiecki park, wpadając do rzeki
            Soły. Młyn był pierwszym budynkiem przed wejściem do centrum Żywca,
            gdzie ludzie z&nbsp;okolicznych wsi, przychodząc boso, oczyszczali
            stopy w&nbsp;płynącej przy nim Młynówce, aby móc założyć buty
            i&nbsp;wejść do miasta.
          </Text>
          <SecondaryHeading>Młyn dzisiaj</SecondaryHeading>
          <Text>
            Obecnie młyn należy do Aleksandry Bielawskiej z&nbsp;rodziny
            Zyzaków. Planowane jest otwarcie w&nbsp;nim skansenu, co umożliwi
            zachowanie dawnego klimatu i&nbsp;wyjątkowego wyglądu obiektu.
            W&nbsp;grudniu 2023&nbsp;r. Młyn Zyzaków trafił na listę zabytków
            i&nbsp;od tego czasu znajduje się pod stałą opieką konserwatorską.
          </Text>
        </TextContainer>
        <ImgContainer>
          <ImgOne src={Img25}></ImgOne>
          <ImgTwo src={Img1}></ImgTwo>
          <ImgThree src={Img3}></ImgThree>
        </ImgContainer>
      </Container>
    </>
  );
};
