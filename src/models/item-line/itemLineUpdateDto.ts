export class ItemLineUpdateDto {
    id: number;
    amount?: number;
    addAmount?: number;
    price?: number;
    vatRate?: number;
    totalVat?: number;
    discount?: number;
    mainAmount?: number;
    lineType: string;
    warehouseId: number;
    partnerId: number;
    itemId: number;
    unitId: number;
    priceTypeId: number;
}
