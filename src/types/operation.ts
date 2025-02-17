import { AssetCategory } from "./asset";

export type OperationType = 'Compra' | 'Venda' | 'Subscrição';


export interface Operation {
    id: number;
    date: Date;
    asset: string;
    category : AssetCategory;
    type: OperationType;
    amount: number;
    price: number;    
}


