import * as React from 'react';
import {EmployeeResponse} from "../../models/api/EmployeeResponse";
import {useCallback, useEffect, useState} from "react";
import {ClinicApi} from "../../api/ClinicApi";
import {Container,SearchElement,SearchElementInput} from "./Table.styles";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
    Box, CardActions, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter,
    TablePagination, TableRow, useTheme
} from '@mui/material';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter, UserName, Button,
} from "../../components/profile/Profile.style";
import {toast} from "react-toastify";
import {PatientResponse} from "../../models/api/PatientResponse";


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
        <>
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
        </>

    );
}



export default function CustomPaginationActionsTable() {
    const [employees, setEmployees] = React.useState<EmployeeResponse[]>([]);
    const [employeesSearchResults, setEmployeesSearchResults] = React.useState<EmployeeResponse[]>([]);
    const [employeeMail, setEmployeeMail] = React.useState<string>("");
    const [showModal, setShowModal] = useState(false);

    function splitString(str: string): string[] | null {
        if (str.includes(" ")) {
            return str.split(" ");
        }
        return null;
    }
    function searchEmployees( firstName:string,lastName:string) {

        return employees.filter((employee) =>{
            const firstNameMatch = employee.firstName.toLowerCase().includes(firstName.toLowerCase());
            const lastNameMatch = employee.lastName.toLowerCase().includes(lastName.toLowerCase());

            if ( firstName === lastName)return firstNameMatch || lastNameMatch
            else return firstNameMatch && lastNameMatch
        });
    }
    function employeeHandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value;
        const result = splitString(searchTerm);
        let results: EmployeeResponse[] = [];
        if (result !== null) {
            const [firstWord, secondWord] = result;
            results = searchTerm ? searchEmployees(firstWord,secondWord) : [];
        } else {
            results = searchTerm ? searchEmployees( searchTerm , searchTerm) : [];
        }
        setEmployeesSearchResults(results);
        if(event.target.value == ""){
            setEmployeesSearchResults(employees)
        }
    }
    const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

    const openModal = (
        event: React.MouseEvent<HTMLTableCellElement>
    ) => {
        setEmployeeMail(event.currentTarget.title)
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false);
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setHighlightedRow(index);
    };

    const handleMouseLeave = () => {
        setHighlightedRow(null);
    };

    const fetchEmployees= useCallback(async () => {
        try {
            const result = await ClinicApi.getEmployees()
            setEmployees(result.data);
            setEmployeesSearchResults(result.data);
        } finally {
            // setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - employees.length) : 0;

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

    const handleEmployeeDelete = async (
    ) => {
        try {
             await ClinicApi.deleteEmployee({
                email: employeeMail
            })
            closeModal()
            const result = await ClinicApi.getEmployees()
            setEmployees(result.data)
            toast.success("Pracownik usunięty");
        } catch (error) {
            toast.error("Nie udało się usunąć pracownika")
        }
    };

    return (
        <Container>
            <SearchElement>
                Wyszukaj pracownika:<br/>
                <SearchElementInput onChange={employeeHandleInputChange}/>
            </SearchElement>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableBody>
                        {(rowsPerPage > 0
                                ? employeesSearchResults.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : employeesSearchResults
                        ).map((employee, index) => (
                            <TableRow  key={employee.firstName}
                                       onMouseEnter={(event) => handleMouseEnter(event, index)}
                                       onMouseLeave={handleMouseLeave}
                                       sx={{
                                           backgroundColor: highlightedRow === index ? '#f5f5f5' : 'transparent'
                                       }}>
                                <TableCell component="th" scope="row">
                                    {employee.firstName}
                                </TableCell>
                                <TableCell >
                                    {employee.lastName}
                                </TableCell>
                                <TableCell style={{ width: 60,marginLeft:0 }} >
                                    {employee.email}
                                </TableCell>
                                <TableCell style={{ width: 60,marginLeft:0 }} align="right" onClick={openModal} title={employee.email}>
                                    X
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
                                count={employees.length}
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
                            <CardActions>
                                {showModal && (
                                    <Modal>
                                        <ModalOverlay/>
                                        <ModalContent>
                                            <UserName>Na pewno chcesz usunąć pracownika?</UserName>
                                            <ModalBody>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button onClick={closeModal}>
                                                    Anuluj
                                                </Button>
                                                <Button onClick={handleEmployeeDelete}>
                                                    Potwierdz
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                )}
                            </CardActions>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    );
}