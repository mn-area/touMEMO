export type FormData = {
    tradedate: string;
    brandname: string;
    investmenttype: number;
    tradetype: number;
    unitprice: string;
    fee: string;
    quantity: string;
    reason: string;
    memo: string;
};

export type Trade = {
    id: number;
    tradedate: Date;
    brandname: string;
    investmenttype: number;
    tradetype: number;
    unitprice: number;
    fee: number;
    quantity: number;
    reason: string;
    memo: string;
}