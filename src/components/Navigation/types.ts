
export interface Item {
    id: number;
    title: string;
    active: boolean;
}
export interface NavigationProps {
    items: Item[];
    onClick: (id: number) => void;
    activeMenuId: number;
}