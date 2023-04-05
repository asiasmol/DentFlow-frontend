import * as React from 'react';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {TableDiv} from"./Profile.style";
import {useState, useEffect, useCallback} from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';
import {ClinicApi} from "../../api/ClinicApi";

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Nr.',
        width: 90
    },
    {
        field: 'name',
        headerName: 'Kliniki :',
        width: 150,
        editable: true,
    }
];

export default function DataGridDemo() {
    const [clinic, setClinic] = useState<ClinicResponse[]>([]);
    const fetchClinic = useCallback(async () => {
        try {
            const result = await ClinicApi.getAll()
            setClinic(result.data)
        }
        finally {

        }
    },[])

    useEffect(() => {
        fetchClinic()
    },[fetchClinic]);

    return (
                <TableDiv>
                    <DataGrid sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: '#1784B3',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
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