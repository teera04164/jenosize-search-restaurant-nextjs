import React from 'react'
import { Box } from '@mui/system';

const CardBoxContainer = ({ children }) => {
    return <Box xs={{ display: "flex" }}>
        {children}
    </Box>
}

export default CardBoxContainer
