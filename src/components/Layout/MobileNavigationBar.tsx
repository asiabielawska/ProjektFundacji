import IconButton from "@mui/material/IconButton/IconButton";
import { MenuButton, NavigationLink, NavigationMenu } from "./styled";

type Props = {
  isMainPage?: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  open: boolean;
};

export const MobileNavigationBar = ({ isMainPage, setOpen, open }: Props) => {
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuButton isMainPage={isMainPage} />
      </IconButton>
      <NavigationMenu open={open} onClose={() => setOpen(false)} anchor="right">
        <NavigationLink to={"/o-fundacji"} onClick={() => setOpen(false)}>
          O fundacji
        </NavigationLink>
        <NavigationLink to={"/historia"} onClick={() => setOpen(false)}>
          Historia
        </NavigationLink>
        <NavigationLink to={"/oferta"} onClick={() => setOpen(false)}>
          Oferta
        </NavigationLink>
        <NavigationLink to={"/galeria"} onClick={() => setOpen(false)}>
          Galeria
        </NavigationLink>
        <NavigationLink to={"/kontakt"} onClick={() => setOpen(false)}>
          Kontakt
        </NavigationLink>
      </NavigationMenu>
    </div>
  );
};
