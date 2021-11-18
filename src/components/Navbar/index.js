import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { useGlobalContext } from '../../contexts/GlobalContext';
import SearchInput from './SearchInput';
import api from '../../API';

export default function Navbar() {
    const { setResultSearch, setLoadding } = useGlobalContext()

    const handleClickSearch = async (query) => {
        setLoadding(true)
        if (!query) {
            return
        }
        const result = await api.getSearch({ query }).catch(() => { setLoadding(false) })
        setResultSearch(result)
        setLoadding(false)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar style={{ minHeight: '100px' }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >SR</Avatar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Search Restaurant
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' }, width: { xs: '100%', md: 'initial' }, justifyContent: 'end', flexDirection: 'column' }}>
                        <Typography
                            variant="subtitle1"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Search
                        </Typography>
                        <SearchInput onSearch={handleClickSearch} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
