import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {ProfileDiv} from "./Profile.style";
import img from "../../resources/img/profile.png";
import Avatar from "@mui/material/Avatar";
import {useCallback, useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {ProfileUserResponse} from "../../models/api/ProfileUserResponse";

export default function MultiActionAreaCard() {
    const [user, setUser] = useState<ProfileUserResponse>();
    const fetchUser = useCallback(async () => {
        try {
            const result = await UserApi.getProfileUser();
            setUser(result.data)
        }
        finally {

        }
    },[])

    useEffect(() => {
        fetchUser()
    },[fetchUser]);

    return (
        <ProfileDiv>
            <CardActionArea sx={{ width: 156, height: 156 }}>
                <Avatar alt="Remy Sharp" src={img} sx={{ width: 156, height: 156 }}/>
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
                <Button size="small" color="primary">
                    Edytuj Profil
                </Button>
            </CardActions>
        </ProfileDiv>
    );
}