import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {ProfileDiv,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    } from "./Profile.style";
import img from "../../resources/img/profile.png";
import Avatar from "@mui/material/Avatar";
import {useCallback, useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {ProfileUserResponse} from "../../models/api/ProfileUserResponse";
import {Fields, StyledBox, WelcomeText, WindowRegistration} from "../registration/Registration.style";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";
import {UserRegistrationData} from "../../models/api/UserRegistrationData";
import {toast} from "react-toastify";
import {UserUpdateData} from "../../models/api/UserUpdateData";

export default function MultiActionAreaCard() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false);
    };
    const [user, setUser] = useState<ProfileUserResponse>();
    const fetchUser = useCallback(async () => {
        try {
            const result = await UserApi.getProfileUser();
            setUser(result.data)
        } finally {

        }
    }, [])

    useEffect(() => {
        fetchUser()
    }, [fetchUser]);

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        // const [email, setEmail] = useState('');

        const navigate = useNavigate();
        const handleSubmit = () => {
                let userRequest: UserUpdateData = {
                    firstName: firstName,
                    lastName: lastName
                }
                UserApi.updateUser(userRequest)
                toast.success("Zaktualizowano profil");
                closeModal();
               navigate("/login");
        }


        return (
            <ProfileDiv>
                <CardActionArea sx={{width: 156, height: 156}}>
                    <Avatar alt="Remy Sharp" src={img} sx={{width: 156, height: 156}}/>
                </CardActionArea>
                <Typography>Imie:</Typography>
                <Typography variant="body2" color="text.secondary">
                    {user?.firstName}
                </Typography>
                <Typography>Nazwisko:</Typography>
                <Typography variant="body2" color="text.secondary">
                    {user?.lastName}
                </Typography>
                <Typography>Email:</Typography>
                <Typography variant="body2" color="text.secondary">
                    {user?.email}
                </Typography>
                <Typography>Hasło:</Typography>
                <Typography variant="body2" color="text.secondary">
                    ********
                </Typography>
                <CardActions>
                    <Button size="small" color="primary" onClick={openModal}>
                        Edytuj Profil
                    </Button>
                    {showModal && (
                        <Modal>
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalHeader>Edytuj Profil</ModalHeader>
                                <ModalBody>
                                    <Fields>
                                        <TextField
                                            required
                                            id="firstName"
                                            label="Imię"
                                            variant="standard"
                                            onChange={(event) => setFirstName(event.target.value)}
                                        />

                                        <TextField
                                            required
                                            id="lastName"
                                            label="Nazwisko"
                                            variant="standard"
                                            onChange={(event) => setLastName(event.target.value)}
                                        />
                                        {/*<TextField*/}
                                        {/*    required*/}
                                        {/*    id="email"*/}
                                        {/*    label="Email"*/}
                                        {/*    type='email'*/}
                                        {/*    variant="standard"*/}
                                        {/*    onChange={event => setEmail(event.target.value)}*/}
                                        {/*/>*/}
                                    </Fields>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={closeModal}>
                                        Anuluj
                                    </Button>
                                    <Button onClick={handleSubmit}>
                                        Zapisz
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    )}
                </CardActions>
            </ProfileDiv>
        );
    }
