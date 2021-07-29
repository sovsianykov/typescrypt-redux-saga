import { Artist } from "../../../redux/constants";

export interface Item {
    item : Artist;
    active: boolean;
}
export interface AccordionProps {
    items: Artist[] | undefined;
    // onClick: (id: number) => void;
    // activeAccordionId: number;
}
export interface AccordionItemProps {
    item: Artist;
    selected : number;
    onClick: any;
    id: number;

}
export interface TitleProps {
    item: Artist;
    selected : number;
    onClick: any;
    id: number;
}
export interface ContentProps {
    item: Artist;
    style: string;
}