import React from 'react';
import NavDashBoard from '../../components/navbar-dashboard';
import ContainerDashBoard from '../../components/container-dashboard';
import GridCards from '../../components/grid-cards';
import './index.css';

export default function DashBoard() {
  return (
    <div className="dashboard">
      <NavDashBoard />
      <ContainerDashBoard Children={GridCards} />
    </div>
  );
}
