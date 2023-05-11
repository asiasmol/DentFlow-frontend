import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList,ListChildComponentProps } from 'react-window';
import {Description} from "../../../models/Description";
import {useEffect} from "react";
import {Descriptions} from "./DayCalendar.styles";


type Props = {
    descriptions:Description[]
};

function renderRow(props: ListChildComponentProps) {
    const { index, style,data } = props;
    console.log(data)
    return (
        <ListItem   component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`${data.descriptions[index]}`} />
            </ListItemButton>
        </ListItem>
);
}

export const VirtualizedList:React.FC<Props> = (props:Props) => {
    useEffect(()=>{
        console.log(props.descriptions)
    },[props.descriptions])
    return (
        <Box
            sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={props.descriptions.length}
                itemCount={props.descriptions.length}
                overscanCount={5}
                itemData={props.descriptions}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}