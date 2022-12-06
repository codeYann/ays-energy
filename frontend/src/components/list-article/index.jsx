import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './index.css';
import api from '../../api';

export default function ListArticle() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/articles');
        setArticles(response.data);
      } catch (error) {
        throw new Error(`${error}`);
      }
    })();
  }, []);

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell className="table-cell">ID</TableCell>
            <TableCell className="table-cell">Título</TableCell>
            <TableCell className="table-cell">ID do autor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow
              key={article.article_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="table-row"
            >
              <TableCell component="th" scope="row">
                {article.article_id}
              </TableCell>
              <TableCell>
                {article.article_title}
              </TableCell>
              <TableCell>
                {article.author_id}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
