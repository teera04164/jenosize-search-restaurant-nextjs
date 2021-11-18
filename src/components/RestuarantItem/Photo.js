import React from 'react'
import CardMedia from '@mui/material/CardMedia';

const Photo = ({ url, name }) => {
    return <CardMedia
        component="img"
        sx={{
            maxWidth: { md: 300 },
            maxHeight: { xs: 250, sm: 300, md: 400 },
        }}
        image={url}
        alt={name}
    />
}

export default Photo
