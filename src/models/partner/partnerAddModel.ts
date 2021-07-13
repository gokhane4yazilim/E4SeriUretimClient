export class PartnerAddModel {
    code: string;
    name: string;
    description: string;
    itemPriceGroupId: number;
    areaId: number;
    villageId: number;
    bagkur?: boolean;
    borsa?: boolean;
    balanceType: string;
    balance?: number;
    address1: string;
    address2: string;
    phoneNumber1: string;
    phoneNumber2: string;
    iban: string;
    tckNo: string;
    taxNo: string;
    taxOffice: string;
}
