import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum';

const Header =() =>{
    return(
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />

            </IconButton>
            
            <img className="header_logo" src="https://sieupet.com/sites/default/files/anh_meo_hai_huoc4.jpg" alt="header" />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}
export default Header