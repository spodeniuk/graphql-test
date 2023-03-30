export type MenuType = {
    menuItems: MenuDataType;
}

export type MenuDataType = {
    data: MenuDataItemType[];
}

export type MenuDataItemType = {
    id: number;
    attributes: MenuDataItemAttributesType;
}

export type MenuDataItemAttributesType = {
    title: string;
    url: string;
}