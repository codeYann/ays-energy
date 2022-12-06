import React from 'react';
import NavDashBoard from '../../components/navbar-dashboard';
import ContainerDashBoard from '../../components/container-dashboard';
import ListArticle from '../../components/list-article';

export default function ListsArticles() {
  return (
    <div className="dashboard">
      <NavDashBoard />
      <ContainerDashBoard Children={ListArticle} />
    </div>
  );
}
