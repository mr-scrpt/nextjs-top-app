export interface IdInterface {
    secondCategory: string;
}

export interface PageItemInterface {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItemSectionInterface {
    _id: IdInterface;
    pages: PageItemInterface[];
}
