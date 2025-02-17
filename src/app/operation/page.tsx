'use client'
import { Container, Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { getOperations } from "../api/backend";
import { Operation } from "@/types/operation";
import { useEffect, useState } from 'react';



const editable = false;


const columns: GridColDef<Operation>[] = [
  { 
    field: 'date', 
    headerName: 'Data', 
    type: 'date',     
    editable: editable,
    flex : 1,   
  },
  {
    field: 'asset',
    headerName: 'Ativo',    
    editable: editable,
    flex : 1,       
  },
  {
    field: 'type',
    headerName: 'Tipo',    
    editable: editable,
    flex : 1,   
    type: 'singleSelect',
    valueOptions: ['Compra', 'Venda'],
  },
  {
    field: 'amount',
    headerName: 'Quantidade',
    type: 'number',    
    editable: editable,
    flex : 1,   
  },
  {
    field: 'price',
    headerName: 'Valor',
    type: 'number',    
    editable: editable,
    flex : 1,   
    valueFormatter: ( value: number ) => `R$ ${value.toFixed(2)}`,
  },
  {
    field: 'total',
    headerName: 'Total',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    sortable: false,  
    flex : 1,     
    valueGetter: (value, row) => row.amount * row.price,
    valueFormatter: ( value: number ) => `R$ ${value.toFixed(2)}`,
  },
];


export default function Page() {
  const [rows, setRows] = useState<Operation[]>([]);

  useEffect(() => {
    getOperations().then(data => setRows(data));
  }, []);

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooter
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );  
}