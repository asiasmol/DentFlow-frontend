import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Description} from "../../../models/Description";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import {MyListItem} from "./DayCalendar.styles";



type Props = {
    descriptions:Description[]
};

function renderRow(props: ListChildComponentProps) {
    const { index, style,data } = props;
    return (
        <MyListItem  key={index} >
            <ListItemButton >
                <ListItemText primary={`${data[index].id}#${data[index].description}`} />
            </ListItemButton>
        </MyListItem>
);
}

export const VirtualizedList:React.FC<Props> = (props:Props) => {
    return (
        <Box
            sx={{ width: '100%', height: 400, borderRadius: 10, maxWidth: 360, bgcolor: 'background.paper' }}
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