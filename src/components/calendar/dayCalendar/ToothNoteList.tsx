import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Description } from '../../../models/Description';
import ListItem from '@mui/material/ListItem';
import {useState} from "react";



type Props = {
    descriptions:Description[]
};



export const VirtualizedList:React.FC<Props> = (props:Props) => {
    function renderRow(props: ListChildComponentProps) {
        const { index, style,data } = props;

        return (
            <ListItem style={{ ...style,width:"360px",textAlign: "center" }} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={`${data[index].id}#${data[index].description}`} />
                </ListItemButton>
            </ListItem>
        );
    }
    return (
        <Box
            sx={{ width: '100%', height: 400, maxWidth: 360,borderRadius:20, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={60}
                itemCount={props.descriptions.length}
                overscanCount={5}
                itemData={props.descriptions}

            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}