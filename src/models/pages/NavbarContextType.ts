import {link} from "../Link";


export type NavbarContextType = {
  currentPages: link[] ;
  pagesModifier: (pages:link[]) => void;
};
