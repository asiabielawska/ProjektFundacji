import { useNavigate } from "react-router-dom";
import {
  BackgroundImg,
  ButtonFindMore,
  HomeAllContent,
  HomeHeading,
  HomeText,
} from "./styled";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundImg>
        <HomeAllContent>
          <HomeHeading>Fundacja Młyn Zyzaków</HomeHeading>
          <HomeText>
            Fundacja zlokalizowana w starym młynie w Żywcu z unikatową historią.
          </HomeText>
          <ButtonFindMore
            variant="contained"
            onClick={() => navigate("/o-fundacji")}
          >
            Dowiedz się więcej
          </ButtonFindMore>
        </HomeAllContent>
      </BackgroundImg>
    </>
  );
};
