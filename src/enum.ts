export enum CustomerType{
    Gold = "Gold",
    Regular = "Regular",
    Platinum = "Platinum"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}