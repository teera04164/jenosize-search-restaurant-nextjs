import React from 'react'
import { Typography } from '@mui/material';

const CardTitile = ({ name, onClickName }) => {
    return <Typography
        style={{ cursor: "pointer" }}
        component="div"
        variant="h5"
        onClick={() => onClickName()}
    >
        {name}
    </Typography>
}
export default CardTitile
