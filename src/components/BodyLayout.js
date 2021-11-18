import React from 'react'
import { Grid } from '@mui/material';

function BodyLayout({ children }) {
    return (
        <Grid
            container
            sx={{
                display: "flex",
                flexDirection: "column",
                p: { xs: "1rem", sm: "2.5rem", md: 10 },
            }}
            style={{ minHeight: "calc(100vh - 160px)", justifyContent: "center" }}
        >
            {children}
        </Grid>
    );
}

export default BodyLayout
