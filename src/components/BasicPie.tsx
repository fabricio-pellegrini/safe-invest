'use client'
import { Card } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useRouter, usePathname } from 'next/navigation';

export type PieData = {
    id: string; label: string; value: number;
}

interface BasicPieProps {
    data: PieData[];
    colors: string[];
}

export function BasicPie({ data, colors }: Readonly<BasicPieProps>) {

    const router = useRouter();
    const pathname = usePathname();

    function handleClick(index: number) {
        router.push(`${pathname}/${data[index].id}`);
    }

    return (
        <Card variant='elevation' >
            <PieChart
                width={900}
                height={300}
                colors={colors}
                onItemClick={(event, i) => handleClick(i.dataIndex)}

                series={[{
                    data: data,
                    innerRadius: 30,
                    valueFormatter: (item: { value: number }) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value),
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },

                ]} />
        </Card>
    );
}   
