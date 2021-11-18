import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput({ onSearch }) {

    const [input, setInput] = useState('ชาบู')

    const handleCliskSearch = (e) => {
        e.preventDefault()
        onSearch(input)
    }
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: '400px' } }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                value={input}
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={({ target: { value } }) => { setInput(value) }}
            />
            <IconButton
                type="submit"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={handleCliskSearch}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}