'use client'
import { Grid2, Typography } from "@mui/material";
import chroma from "chroma-js";
import { BasicPie, PieData } from "../BasicPie";
import BRL from "../utils/MoneyFormat";
import SummaryTable, { TableData } from "./SummaryTable";


type SummaryData = PieData & TableData;

interface SummaryProps {
    title: string;
    data: SummaryData[];
    total: number;
    totalProfit: number;
    withAmount?: boolean;
}


export default function Summary({ title, data, total, totalProfit, withAmount }: Readonly<SummaryProps>) {

    const colors = chroma.scale(['#00429d', '#96ffea', '#ffffe0', '#ff005e', '#93003a']).colors(data.length);
    return (
        <Grid2 container spacing={4}>
            <Grid2 size={12}>
                <Typography variant="h4">{title ?? "Geral"}</Typography>
            </Grid2>
            <Grid2 size={6}>
                <Typography>Total Investido: {BRL.format(total)}</Typography>
            </Grid2>
            <Grid2 size={6}>
                <Typography>Total Ganho: {BRL.format(totalProfit)}</Typography>
            </Grid2>
            <Grid2 size={12}>
                <BasicPie data={data} colors={colors} />
            </Grid2>
            <Grid2 size={12}>
                <SummaryTable data={data} total={total} withAmount={withAmount} />
            </Grid2>
        </Grid2>
    );

}