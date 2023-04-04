import * as React from 'react';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {TableDiv} from"./Profile.style";
import { useState, useEffect } from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Nr.',
        width: 90
    },
    {
        field: 'clinic',
        headerName: 'Kliniki :',
        width: 150,
        editable: true,
    }
];

export default function DataGridDemo() {
    const [clinic, setClinic] = useState<ClinicResponse[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost:8080//api/clinics/all", {
                method: "GET"
            });
            const jsonData = await data.json();
            setClinic(jsonData.clinic);
        };
        api();
    },[]);
    clinic.map(value => {
        console.log(value.name)
    })
    return (
                <TableDiv>
                    <DataGrid
                        rows={clinic}
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
                 </TableDiv>
    );
}