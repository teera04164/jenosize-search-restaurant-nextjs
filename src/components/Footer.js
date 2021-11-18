import React from 'react'
import { styled } from '@mui/material/styles';

const FooterTab = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: 1,
    padding: '1rem 0 1rem 1rem',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'start',
    alignItems: 'center',
}));

function Footer() {
    return (
        <FooterTab>
            Footer
        </FooterTab>
    )
}

export default Footer
