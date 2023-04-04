import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {ProfileDiv} from "./Profile.style";
import img from "../../resources/img/profile.png";
import Avatar from "@mui/material/Avatar";

export default function MultiActionAreaCard() {
    return (
        <ProfileDiv>
            <CardActionArea>
                <Avatar alt="Remy Sharp" src={img} sx={{ width: 156, height: 156 }}/>
            </CardActionArea>
                <Typography>Imie:</Typography>
                <Typography variant="body2" color="text.secondary">
                    Ala
                </Typography>
                <Typography>Nazwisko:</Typography>
                <Typography variant="body2" color="text.secondary">
                    Borsukowa
                </Typography>
                <Typography>Email:</Typography>
                <Typography variant="body2" color="text.secondary">
                    norsuk@wop.pl
                </Typography>
                <Typography>Hasło:</Typography>
                <Typography variant="body2" color="text.secondary">
                    *********
                </Typography>
            <CardActions>
                <Button size="small" color="primary">
                    Edytuj Profil
                </Button>
            </CardActions>
        </ProfileDiv>
    );
}