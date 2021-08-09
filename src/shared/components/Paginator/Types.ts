export interface PaginatorItemProps {
    id: number;
    active: boolean;
    onClick(id:number): void;
}

export interface PaginatorProps {
    totalItems : number;
    itemsPerPage : number;
    activePageIid : number;
    onClick: (id:number) => void;
}
