import {AddEmplyeeButton, AddEmplyeeInput, MainContainer, SearchElement, SearchList} from "./AddEmplyee.styles";
import React, {useCallback, useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {ClinicApi} from "../../api/ClinicApi";




export const AddEmplyee = ()=>{
    const [email, setEmail] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [emailList, setEmailList] = useState<string[]>([]);
    function search(searchTerm: string) {
        const filteredEmails = emailList.filter((email) =>
            email.includes(searchTerm)
        );
        return filteredEmails;
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value;
        const results = searchTerm ? search(searchTerm) : [];
        setEmail(searchTerm);
        setSearchResults(results);
    }

    function handleResultClick(result: string) { // określenie typu parametru "result" na string
        setEmail(result);
        setSearchResults([]);
    }

    const addEmployee = useCallback(async () => {
        await ClinicApi.addEmployees({
            email: email,
        });
    },[email] );
    const fetchEmails= useCallback(async () => {
        try {
            const result = await UserApi.getAllEmails();
            setEmailList(result.data);
        } finally {
            // setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEmails();
    }, [fetchEmails])

    return(
        <MainContainer>
            <AddEmplyeeInput
                type="text"
                value={email}
                placeholder="Search..."
                onChange={handleInputChange}
            />
            <SearchList>
                {searchResults.map((result) => (
                    <SearchElement key={result} onClick={() => handleResultClick(result)}>
                        {result}
                    </SearchElement>
                ))}

            </SearchList>
            <AddEmplyeeButton
                onClick={addEmployee}
            >
                Dodaj pracownika
            </AddEmplyeeButton>
        </MainContainer>
    );
}