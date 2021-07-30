import { Artist } from "../../../redux/constants";

export interface Item {
    artist : Artist;
    active: boolean;
}
export interface AccordionProps {
    items: Artist[] | undefined;
    // onClick: (id: number) => void;
    // activeAccordionId: number;
}
export interface AccordionItemProps {
    item: Artist ;
    onClick: any;
    active: boolean;



}
export interface TitleProps {
    item: Artist;
    onClick: any;
    active: boolean
}
export interface ContentProps {
    item: Artist;
    style: string;
}