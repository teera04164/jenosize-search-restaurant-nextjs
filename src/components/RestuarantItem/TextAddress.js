
import React from 'react'
import { Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const TextAddress = ({ address }) => {
    return <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{ display: "flex", alignItems: "inherit" }}
    >
        <RoomIcon style={{ color: "#e91717" }} /> {address}
    </Typography>
}


export default TextAddress
