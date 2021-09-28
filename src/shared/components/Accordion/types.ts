import { Artist } from "../../../redux/constants";

// export interface Item {
//     artist : Artist;
//     active: boolean;
// }
export interface AccordionProps {
    items: Artist[] | undefined;
}
export interface AccordionItemProps {
    item: Artist ;
    onClick: () => void;
    active: boolean;
}
export interface TitleProps {
    item: Artist;
    onClick: () => void;
    active: boolean;
}
export interface ContentProps {
    item: Artist;
    style: string;
}
