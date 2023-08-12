import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import logo from '../components/images/code.png'
const Newappbar = styled(AppBar)`
background:rgb(0, 120, 120);
height:9vh;
`

const Header = () => {
    return (
        <Newappbar style={{ position: "static" }}>
            <Toolbar >
                <img src={logo} alt="logo" style={{ width: "40px", padding: "5px" }} />
                <h3 style={{ fontSize: "max(3vh,2.2vw)", padding: "5px" }}>Code Craft</h3>
            </Toolbar>
        </Newappbar>
    )
}

export default Header