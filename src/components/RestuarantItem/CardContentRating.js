import React from 'react'
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CardContentRating = ({ rating, totalRating }) => {
    return <>
        <Stack
            spacing={1}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 0,
            }}
        >
            <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ display: "flex", alignItems: "inherit" }}
            >
                {rating}
            </Typography>
            <Rating
                style={{ marginTop: 0 }}
                name="half-rating-read"
                defaultValue={rating}
                precision={0.1}
                readOnly
            />
            <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ display: "flex", alignItems: "inherit", mt: 0 }}
                style={{ marginTop: 0 }}
            >
                {totalRating} reviews
            </Typography>
        </Stack>
    </>
}
export default CardContentRating
