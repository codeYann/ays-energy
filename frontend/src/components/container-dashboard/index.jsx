import React from 'react';
import './index.css';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import BasicCard from '../cards-dashboard';

export default function Container() {
  return (
    <div className="container-dashboard">
      <aside className="container-drawer">
        <ul>
          <li>
            <a href="#_">
              <HomeIcon className="container-drawer-icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#blank">
              <LogoutIcon className="container-drawer-icon" />
              Logout
            </a>
          </li>
        </ul>
      </aside>
      <main className="container-main">
        <div className="container-main-first-row">
          <BasicCard />
          <BasicCard />
        </div>
        <div className="container-main-second-row">
          <BasicCard />
          <BasicCard />
        </div>
      </main>
    </div>
  );
}
