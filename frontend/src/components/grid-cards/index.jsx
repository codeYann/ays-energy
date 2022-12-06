import React from 'react';
import CustomCard from '../cards-dashboard';
import './index.css';

export default function GridCards() {
  return (
    <div className="grid-card-wrapper">
      <div className="grid-card-wrapper-first-row">
        <CustomCard
          headerName="Crie um artigo!"
          text="Organize suas ideias e publique um novo texto!"
          buttonName="Criar"
          buttonColor="success"
          redirectTo="dashboard/create"
          color="#2e7d32"
        />
        <CustomCard
          headerName="Listagem de artigos!"
          text="Veja quantos artigos você criou!"
          buttonName="Listar"
          buttonColor="primary"
          redirectTo="dashboard/list"
          color="#3861f7"
        />
      </div>
      <div className="grid-card-wrapper-second-row">
        <CustomCard
          headerName="Remova um artigo!"
          text="Gostaria de remover um artigo publicado?"
          buttonName="Remover"
          buttonColor="error"
          redirectTo="dashboard/remove"
          color="#d32f2f"
        />
        <CustomCard
          headerName="Altere seu texto!"
          text="Gostaria de corrigir algo?"
          buttonName="Alterar"
          buttonColor="secondary"
          redirectTo="dashboard/updated"
          color="#9c27b0"
        />
      </div>
    </div>
  );
}
