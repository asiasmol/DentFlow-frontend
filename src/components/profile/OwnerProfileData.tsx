import * as React from 'react';
import {ClinicData, TableDiv} from "./Profile.style";
import {useState, useEffect, useCallback} from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';
import {ClinicApi} from "../../api/ClinicApi";
import {TableCell, TableRow} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {ProfileUserResponse} from "../../models/api/ProfileUserResponse";
import {UserApi} from "../../api/UserApi";

export default function DataGridDemo() {
    const [ownerEmail, setOwnerEmail] = useState<String>();
    const [clinic, setClinic] = useState<ClinicResponse>();
    const fetchClinic = useCallback(async () => {
        try {
            const result = await ClinicApi.getMyClinic();
            setClinic(result.data);
            const user = await UserApi.getUser();
            setOwnerEmail(user.data.email);
        }
        finally {

        }
    },[])
    useEffect(() => {
        fetchClinic()
    },[fetchClinic]);

    return (
        <TableDiv>
        <ClinicData>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <strong>Nazwa</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Adres</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Miasto</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Email</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Numer Telefonu</strong>
                        </TableCell>
                        <TableCell />
                    </TableRow>
                    <TableRow>
                    <TableCell>
                        {clinic?.name}
                    </TableCell>
                    <TableCell>
                        {clinic?.address}
                    </TableCell>
                    <TableCell >
                        {clinic?.city}
                    </TableCell>
                    <TableCell >
                        {ownerEmail}
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </ClinicData>
        </TableDiv>
    );
}