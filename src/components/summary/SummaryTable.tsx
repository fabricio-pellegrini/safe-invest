'use client'

import { DataGrid } from "@mui/x-data-grid";
import BRL from "../utils/MoneyFormat";

export type TableData = {
    id: string; 
    label: string; 
    amount?: number; 
    value: number; 
    currentValue: number
}



interface SummaryTableProps {
    data: TableData[];
    total: number;
    withAmount?: boolean;
}

export default function SummaryTable({ data, total, withAmount }: Readonly<SummaryTableProps>) {

    if (!withAmount) {
        return (
            <DataGrid rows={data} columns={[
                { field: 'label', headerName: 'Ativo', flex: 1 },
                { field: 'value', headerName: 'Total Investido (R$)', flex: 1, valueFormatter: (value) => BRL.format(value) },
                {
                    field: 'rate', headerName: '% Carteira', flex: 1,
                    valueGetter: (value, row) => ((row.value / total) * 100).toFixed(2),
                    valueFormatter: (value) => `${value}%`
                },
            ]} hideFooterPagination />
        );
    } else {
        return (
            <DataGrid rows={data} columns={[
                { field: 'label', headerName: 'Ativo', flex: 1 },
                { field: 'amount', headerName: 'Quantidade', flex: 1 },
                { field: 'currentValue', headerName: 'Preço Atual (R$)', flex: 1, valueFormatter: (value) => BRL.format(value) },
                { field: 'value', headerName: 'Total Investido (R$)', flex: 1, valueFormatter: (value) => BRL.format(value) },
                {
                    field: 'currentTotal', headerName: 'Total Atual (R$)', flex: 1,
                    valueGetter: (value, row) => ((row.amount ?? 0) * row.currentValue).toFixed(2),
                    valueFormatter: (value) => BRL.format(value)
                },
                {
                    field: 'profit', headerName: 'Rentabilidade (R$)', flex: 1,
                    valueGetter: (value, row) => ((row.amount ?? 0) * row.currentValue) - row.value,
                    valueFormatter: (value) => BRL.format(value)
                },
                {
                    field: 'rate', headerName: '% Carteira', flex: 1,
                    valueGetter: (value, row) => ((row.value / total) * 100).toFixed(2),
                    valueFormatter: (value) => `${value}%`
                },
            ]} hideFooterPagination />
        );
    }
}