'use server'

import { Operation } from "@/types/operation";
import operations from "./data/operations";
import prices from "./data/prices";
import { AssetCategory } from "@/types/asset";





export async function getOperations(): Promise<Operation[]> {
    return operations;
}




export async function getAssets(): Promise<{label: string, total: number}[]> {
    return operations.reduce((acc, operation) => {
        if (!acc.some(item => item.label === operation.asset)) {
            acc.push({ label: operation.asset, total: operation.amount });
        }
        else {
            const index = acc.findIndex(item => item.label === operation.asset);
            acc[index].total += operation.amount;
        }
        return acc;
    }, [] as {label: string, total: number}[]);
}

export async function getCategories(): Promise<string[]> {
    return Array.from(new Set(operations.map(operation => operation.category)));
}

export async function getAssetsByCategory(category: string): Promise<{label: string, total: number}[]> {
    return operations.reduce((acc, operation) => {
        if (operation.category === category) {
            if (!acc.some(item => item.label === operation.asset)) {
                acc.push({ label: operation.asset, total: operation.amount });
            }
            else {
                const index = acc.findIndex(item => item.label === operation.asset);
                acc[index].total += operation.amount;
            }
        }
        return acc;
    }, [] as {label: string, total: number}[]);
}

export async function getTotalInvested(): Promise<number> {
    return operations.reduce((acc, operation) => acc + (operation.amount*operation.price), 0);
}

export async function getTotalInvestedByAsset(asset: string): Promise<number> {
    return operations.reduce((acc, operation) => {
        if (operation.asset === asset) {
            return acc + (operation.amount*operation.price);
        }
        return acc;
    }, 0);
}

export async function getCategory(category: string): Promise<AssetCategory> {    
    switch (decodeURIComponent(category.toLowerCase())) {
        case 'ação':
            return 'Ação';
        case 'fii':
            return 'FII';
        case 'cripto':
            return 'Cripto';
        case 'tesouro':
            return 'Tesouro';
        case 'renda fixa':
            return 'Renda Fixa';
        case 'outros':
            return 'Outros';
        default:
            throw new Error('Invalid category');
    }
}


export async function getTotalInvestedByCategory(category: AssetCategory): Promise<number> {
    return operations.reduce((acc, operation) => {
        if (operation.category === category) {
            return acc + (operation.amount*operation.price);
        }
        return acc;
    }, 0);
}

export async function getTodayPrice(ticket: string): Promise<number> {
    return prices.find(price => price.ticket === ticket)?.price || 0;
}

export async function getTodayTotalByCategory(category: AssetCategory):  Promise<number> {
    const promises = operations.map(async (operation) => {
        if (operation.category === category) {
            const price = await getTodayPrice(operation.asset);
            return operation.amount * price;
        }
        return 0;
    });
    const results = await Promise.all(promises);
    return results.reduce((acc, value) => acc + value, 0);
}






