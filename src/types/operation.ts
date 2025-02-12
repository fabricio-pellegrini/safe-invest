// { id:1,  date: new Date(), asset: 'XPLG11', type: 'Compra', amount: 10, price: 95.5 },  


export type OperationType = 'Compra' | 'Venda' | 'Subscrição';

export interface Operation {
    id: number;
    date: Date;
    asset: string;
    type: OperationType;
    amount: number;
    price: number;    
}