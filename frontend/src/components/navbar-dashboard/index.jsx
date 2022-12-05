import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css';

export default function NavDashBoard() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className="navbar-dashboard">
      <div className="navbar-dashboard-header">
        <IconButton
          color="inherit"
          onClick={() => setIsOpened(!isOpened)}
        >
          {isOpened ? <ChevronLeft /> : <MenuIcon />}
        </IconButton>
        <h1>AysEnergy</h1>
      </div>
      <div className="navbar-dashboard-menu">
        <SearchIcon className="navbar-dashboard-menu-icon" />
        <Avatar
          className="navbar-dashboard-menu-avatar"
          sx={{ bgcolor: ['#fff'], color: ['#000'] }}
        >
          U
        </Avatar>
      </div>
    </nav>
  );
}
