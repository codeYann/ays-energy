import React from 'react';
import NavDashBoard from '../../components/navbar-dashboard';
import ContainerDashBoard from '../../components/container-dashboard';
import FooterDashBoard from '../../components/footer-dashboard';
import './index.css';

export default function DashBoard() {
  return (
    <div className="dashboard">
      <NavDashBoard />
      <ContainerDashBoard />
      <FooterDashBoard />
    </div>
  );
}
