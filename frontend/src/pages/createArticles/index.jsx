import React from 'react';
import NavDashBoard from '../../components/navbar-dashboard';
import CreateArticle from '../../components/create-article';
import ContainerDashBoard from '../../components/container-dashboard';

export default function CreateArticles() {
  return (
    <div className="dashboard">
      <NavDashBoard />
      <ContainerDashBoard Children={CreateArticle} />
    </div>
  );
}
