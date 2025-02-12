'use client'
import { Container, Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import operations from '@/data/operations';


const assetOptions = ['ALZR11',
  'BCFF11',
  'BTLG11',
  'HGCR11',
  'HGLG11',
  'HGRU11',
  'HSML11',
  'IRDM11',
  'MALL11',
  'MCCI11',
  'PATC11',
  'PVBI11',
  'RBRP11',
  'RCRB11',
  'RECR11',
  'SDIL11',
  'VGIP11',
  'VGIR11',
  'VILG11',
  'VISC11',
  'VRTA11',
  'XPLG11',
  'XPML11']

const editable = false;


const columns: GridColDef<(typeof operations)[number]>[] = [
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

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <DataGrid
          rows={operations}
          columns={columns}
          hideFooter
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}