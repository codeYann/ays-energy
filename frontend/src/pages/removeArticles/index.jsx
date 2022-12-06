import React from 'react';
import NavDashBoard from '../../components/navbar-dashboard';
import ContainerDashBoard from '../../components/container-dashboard';
import RemoveArticle from '../../components/remove-article';

export default function RemoveArticles() {
  return (
    <div className="dashboard">
      <NavDashBoard />
      <ContainerDashBoard Children={RemoveArticle} />
    </div>
  );
}
