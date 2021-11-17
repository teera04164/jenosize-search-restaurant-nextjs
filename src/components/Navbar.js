import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useGlobalContext } from '../contexts/GlobalContext';
import { fakeData } from './fakeAPI';
import CustomizedInputBase from './CustomizedInputBase';
import axios from 'axios'
import api from '../API';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    zIndex: 9999,
    '&:hover': {
        cursor: 'pointer'
    },
    cursor: 'pointer',
    padding: theme.spacing(0, 2),
    right: 0,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    zIndex: 100,
    color: 'inherit',
    '& .MuiInputBase-input': {
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navbar() {
    const { resultSearch, setResultSearch } = useGlobalContext()

    const handleClickSearch = async (query) => {
        if (!query) {
            return
        }
        const result = await api.getSearch({ query })
        console.log("🚀 ~ file: Navbar.js ~ line 67 ~ handleClickSearch ~ result", result)
        console.log('in onClick');
        setResultSearch(result)
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
                        {/* <MenuIcon /> */}
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
                        <CustomizedInputBase onSearch={handleClickSearch} />
                        {/* <Search >
                            <div className="vbbbb">
                                <SearchIconWrapper >
                                    <SearchIcon />
                                </SearchIconWrapper>
                            </div>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
