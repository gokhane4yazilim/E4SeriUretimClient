export class ItemPriceListModel {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    creationDate: Date;
    priceTypeId: number;
    priceType: string;
    itemId: number;
    item: string;
    itemPriceGroupId: number;
    itemPriceGroup: string;
}
