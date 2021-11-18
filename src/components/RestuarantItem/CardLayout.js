import React from 'react'
import Card from '@mui/material/Card';

const CardLayout = ({ children }) => {
    return <Card
        sx={{
            mb: "1rem",
            display: "flex",
            width: "100%",
            height: "100%",
            maxWidth: { md: 1000 },
            maxHeight: { xs: 360, sm: 450, md: 200 },
            flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
    >
        {children}
    </Card>
}


export default CardLayout
