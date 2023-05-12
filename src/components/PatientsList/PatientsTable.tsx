import * as React from 'react';
import {useCallback, useContext, useEffect} from "react";
import {ClinicApi} from "../../api/ClinicApi";
import {Container} from "./PatientsList.styles";
import {PatientResponse} from "../../models/api/PatientResponse";
import {ClinicContext} from "../../context/ClinicContext";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Box, IconButton, TableCell, TableContainer, TableFooter, TableRow, useTheme} from '@mui/material';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import {EmployeeResponse} from "../../models/api/EmployeeResponse";
import {SearchElement, SearchElementInput} from "../MyClinic/Table.styles";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}



export default function CustomPaginationActionsTable() {
    const [patients, setPatients] = React.useState<PatientResponse[]>([]);
    const [patientsSearchResults, setPatientsSearchResults] = React.useState<PatientResponse[]>([]);
    const {currentClinic} = useContext(ClinicContext);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    function splitString(str: string): string[] | null {
        if (str.includes(" ")) {
            return str.split(" ");
        }
        return null;
    }
    function searchPatients( firstName:string,lastName:string) {

        return patients.filter((patient) =>{
            const firstNameMatch = patient.firstName.toLowerCase().includes(firstName.toLowerCase());
            const lastNameMatch = patient.lastName.toLowerCase().includes(lastName.toLowerCase());

            if ( firstName === lastName)return firstNameMatch || lastNameMatch
            else return firstNameMatch && lastNameMatch
        });
    }
    function patientHandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value;
        const result = splitString(searchTerm);
        let results: PatientResponse[] = [];
        if (result !== null) {
            const [firstWord, secondWord] = result;
            results = searchTerm ? searchPatients(firstWord,secondWord) : [];
        } else {
            results = searchTerm ? searchPatients( searchTerm , searchTerm) : [];
        }
        setPatientsSearchResults(results);
        if(event.target.value == ""){
            setPatientsSearchResults(patients)
        }
    }

    const fetchPatients= useCallback(async () => {
        try {
            const result = await ClinicApi.getPatients({
                clinicId:currentClinic?.id
            });
            setPatients(result.data)
            setPatientsSearchResults(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    useEffect(() => {
        fetchPatients();
    }, [fetchPatients])


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - patients.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container>
            <SearchElement>
                Wyszukaj Pacjenta:<br/>
                <SearchElementInput onChange={patientHandleInputChange}/>
            </SearchElement>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableBody>
                        {(rowsPerPage > 0
                                ? patientsSearchResults.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : patientsSearchResults
                        ).map((patient) => (
                            <TableRow key={patient.firstName}>
                                <TableCell component="th" scope="row">
                                    {patient.firstName}
                                </TableCell>
                                <TableCell >
                                    {patient.lastName}
                                </TableCell>
                                <TableCell style={{ width: 60,marginLeft:0 }} >
                                    {patient.email}
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={patients.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    );
}