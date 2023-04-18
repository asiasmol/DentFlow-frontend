import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AddEmplyeeInput, SearchElement, SearchList} from "../../addEmployee/AddEmplyee.styles";
import {useCallback, useContext, useEffect, useState} from "react";
import {ClinicApi} from "../../../api/ClinicApi";
import {ClinicContext} from "../../../context/ClinicContext";
import {EmployeeResponse} from "../../../models/api/EmployeeResponse";


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();



export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [doctors, setDoctors] = useState<EmployeeResponse[]>([]);
    const {currentClinic} = useContext(ClinicContext);

    function search(searchTerm: string) {
    //     const filteredEmails = doctors.filter((email) =>
    //         email.includes(searchTerm)
    //     );
    //     return filteredEmails;
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     const searchTerm = event.target.value;
    //     const results = searchTerm ? search(searchTerm) : [];
    //     setEmail(searchTerm);
    //     setSearchResults(results);
    }

    function handleResultClick(result: string) { // określenie typu parametru "result" na string
    //     setEmail(result);
    //     setSearchResults([]);
    }

    const fetchDoctors= useCallback(async () => {
        try {
            const result = await ClinicApi.getDoctors({
                clinicId:currentClinic?.id
            });
         setDoctors(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    useEffect(() => {
        fetchDoctors();
    }, [fetchDoctors])


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <AddEmplyeeInput
                        type="text"
                        value={email}
                        placeholder="Search..."
                        onChange={handleInputChange}
                    />


                    <SearchList>
                        {searchResults.map((result) => (
                            <SearchElement key={result} onClick={() => handleResultClick(result)}>
                                {/*{result}*/}

                            </SearchElement>
                        ))}

                    </SearchList>
                    <Box component="form" noValidate sx={{ mt: 1 }}>


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="patientId"
                            label="pacjent"
                            type="patientId"
                            id="patientId"
                            autoComplete="current-password"

                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#78A6C8',
                                ':hover': {bgcolor: '#78A6C8'}}}
                        >

                            Umów
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                {doctors.map((doctor)=> (
                    <h1>{doctor.firstName}</h1>
                ))}
            </Container>
        </ThemeProvider>
    );
}
