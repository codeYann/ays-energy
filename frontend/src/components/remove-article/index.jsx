import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css';
import api from '../../api';

export default function RemoveArticle() {
  const [articles, setArticles] = useState([]);
  const [id, setID] = useState(0);

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

  const handleRemoveArticle = async (articleID) => {
    try {
      await api.delete('/articles', {
        article_id: articleID,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <TableContainer component={Paper} className="table-remove-container">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead className="table-remove-head">
          <TableRow className="table-remove-row">
            <TableCell className="table-remove-cell">ID</TableCell>
            <TableCell className="table-remove-cell">Título</TableCell>
            <TableCell className="table-remove-cell">ID do autor</TableCell>
            <TableCell className="table-remove-cell">Remover </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow
              key={article.article_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="table-remove-row"
            >
              <TableCell component="th" scope="row">
                {article.article_id}
              </TableCell>
              <TableCell>{article.article_title}</TableCell>
              <TableCell>{article.author_id}</TableCell>
              <TableCell>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setID(article.article_id);
                    handleRemoveArticle(id);
                  }}
                >
                  <DeleteIcon sx={{ color: 'red' }} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
