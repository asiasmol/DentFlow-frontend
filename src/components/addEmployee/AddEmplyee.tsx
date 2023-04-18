import {AddEmplyeeButton, AddEmplyeeInput, MainContainer, SearchElement, SearchList} from "./AddEmplyee.styles";
import React, {useCallback, useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {ClinicApi} from "../../api/ClinicApi";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";




export const AddEmplyee = ()=>{
    const [email, setEmail] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [isRole, setIsRole] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [emailList, setEmailList] = useState<string[]>([]);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const navigate = useNavigate();
    const handleCheck1Change = () => {
        setIsChecked1(true);
        setIsChecked2(false);
        setRole("DOCTOR");
        setIsRole(true);
    }

    const handleCheck2Change = () => {
        setIsChecked1(false);
        setIsChecked2(true);
        setRole("RECEPTIONIST")
        setIsRole(true);
    }
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
            role:role
        });
        toast.success("Dodano pracownika");
        navigate("/my-clinic");
    },[email,role, navigate] );
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
            <div>
                <input type="checkbox" checked={isChecked1} onChange={handleCheck1Change} />
                <label style={{ marginLeft: 8 }}>Lekarz</label>
                <input type="checkbox" checked={isChecked2} onChange={handleCheck2Change} />
                <label style={{ marginLeft: 8 }}>Recepcjonistka</label>
            </div>
            <AddEmplyeeButton
                disabled={!isRole}
                onClick={addEmployee}
            >
                Dodaj pracownika
            </AddEmplyeeButton>
        </MainContainer>
    );
}