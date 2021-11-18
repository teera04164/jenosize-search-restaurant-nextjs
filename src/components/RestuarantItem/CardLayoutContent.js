import React from 'react'
import { Box } from '@mui/system';
import CardContent from '@mui/material/CardContent';

const CardLayoutContent = ({ children }) => {
    return <>  <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            minWidth: 400,
        }}
    >
        <CardContent sx={{ flex: "1 0 auto" }}>
            {children}
        </CardContent>
    </Box>
    </>
}

export default CardLayoutContent
