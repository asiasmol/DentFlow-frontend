import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: '', width: 90 },
    {
        field: 'clinic',
        headerName: 'Kliniki :',
        width: 150,
        editable: true,
    }
];

const rows = [
    { id: 1, clinic: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, clinic: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, clinic: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, clinic: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, clinic: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, clinic: 'Melisandre', firstName: null, age: 150 },
    { id: 7, clinic: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, clinic: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, clinic: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 318, width: '50%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                pageSizeOptions={[4]}
                // checkboxSelection
                // disableRowSelectionOnClick
            />
         </Box>
    );
}