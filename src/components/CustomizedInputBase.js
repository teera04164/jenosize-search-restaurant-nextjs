import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase({ onSearch }) {
    const [input, setInput] = useState('ชาบู')
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                value={input}
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={({ target: { value } }) => { setInput(value) }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={(e) => {
                e.preventDefault()
                onSearch(input)
            }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}