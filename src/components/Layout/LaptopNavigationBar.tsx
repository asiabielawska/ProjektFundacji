import { AllLinks, NavigationLink } from "./styled";

type Props = {
  isMainPage?: boolean;
};

export const LaptopNavigationBar = ({ isMainPage }: Props) => {
  return (
    <div>
      <AllLinks isMainPage={isMainPage}>
        <NavigationLink to={"/o-fundacji"}>O Fundacji</NavigationLink>
        <NavigationLink to={"/historia"}>Historia</NavigationLink>
        <NavigationLink to={"/oferta"}>Oferta</NavigationLink>
        <NavigationLink to={"/galeria"}>Galeria</NavigationLink>
        <NavigationLink to={"/kontakt"}>Kontakt</NavigationLink>
      </AllLinks>
    </div>
  );
};
