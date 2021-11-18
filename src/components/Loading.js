import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function Loading() {
    const { loadding, setLoadding } = useGlobalContext()

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loadding}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}