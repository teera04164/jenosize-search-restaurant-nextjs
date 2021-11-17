import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import RoomIcon from '@mui/icons-material/Room';
const imgUri = 'http://localhost:5002/api/restaurant/photo?photo_reference=Aap_uEAXfcSmaocZ2kHQKWgrEi-7p6UGBup10VsrgXOLJQhJnLpBhdZN0ew8uDtX7e58kN8XS_d6nMLdyIdbG4uyPkqGbx6fCtskBpkpBTejH2nbJ33Gxj7JRluoQBs5QF12J2fwVDnyGQkCSuVBpM2oChpubtchoXfjp67kgXN9o25zA0fr'


function RestuarantItem({ name, address, rating, totalRating, photo }) {
    return (
        <Grid container style={{ maxWidth: '1200px', }} justifyContent='center'>
            <Grid item xs={3} style={{ minHeight: '160px', minWidth: '200px' }}>
                <img src={photo} style={{ maxWidth: '300px', width: '100%', height: '160px', objectFit: 'cover' }} />
            </Grid>
            <Grid item xs={6} style={{ backgroundColor: 'white', padding: '0px 0px 0px 20px' }}>
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    // sx={{ display: { xs: 'none', sm: 'block' } }}
                    style={{ cursor: 'pointer' }}
                >
                    {name}
                </Typography>
                <Box xs={{ display: 'flex' }}>
                    <Stack spacing={1} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <span>
                            {rating}
                        </span>
                        <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
                        <span>
                            {totalRating} reviews
                        </span>
                    </Stack>
                    <Typography
                        variant="caption"
                        noWrap
                        component="div"
                        sx={{ display: 'flex', alignItems: 'end' }}
                    >
                        <RoomIcon style={{ color: '#e91717' }} /> {address}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default RestuarantItem
