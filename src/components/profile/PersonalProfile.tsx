import * as React from 'react';
import {
    ProfileDiv,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    ProfilePicture, UserName, Button, TextFieldModal,
} from "./Profile.style";
import img from "../../resources/img/profile.png";
import {useCallback, useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {ProfileUserResponse} from "../../models/api/ProfileUserResponse";
import {toast} from "react-toastify";
import {CardActions} from '@mui/material';

export default function MultiActionAreaCard() {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState<ProfileUserResponse>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false);
    };

    const fetchProfileUser = useCallback(async () => {
        try {
            const result = await UserApi.getProfileUser();
            setUser(result.data)
            setFirstName(result.data.firstName)
            setLastName(result.data.lastName)
            setEmail(result.data.email)
        } catch(error) {
            console.error(error);
        }
    }, [])

    useEffect(() => {
        if (!user) {
            fetchProfileUser()
        }
    }, [fetchProfileUser]);

    const changeLastname = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const changeFirstname = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFirstName(event.target.value)
    }


    const handleSubmit = async () => {
        try {
            const updatedUser = await UserApi.updateUser({
                firstName: firstName,
                lastName: lastName
            });
            setUser(updatedUser.data);
            toast.success("Zaktualizowano profil");
            closeModal();
        } catch (error) {
            toast.error("Nie udało się zaktualizować profilu");
        }
    };

        return (
            <ProfileDiv>
                <ProfilePicture src={img} />
                <UserName>{firstName} {lastName}</UserName>
                <Button onClick={openModal}>
                    Edytuj Profil
                </Button>
                <CardActions>
                    {showModal && (
                        <Modal>
                            <ModalOverlay/>
                            <ModalContent>
                                <UserName>Edytuj Profil</UserName>
                                <ModalBody>
                                    <TextFieldModal
                                        required
                                        id="firstName"
                                        label="Imię"
                                        defaultValue={firstName}
                                        onChange={changeFirstname}/>
                                    <TextFieldModal
                                        required
                                        id="lastName"
                                        label="Nazwisko"
                                        defaultValue={lastName}
                                        onChange={changeLastname}/>
                                    <TextFieldModal
                                        required
                                        id="email"
                                        label="Email"
                                        defaultValue={email}
                                        type='email'
                                        onChange={event => setEmail(event.target.value)}/>
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

