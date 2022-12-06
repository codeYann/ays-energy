import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from '@mui/material';
import './index.css';
import api from '../../api';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState(0);
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await api.post('/articles', {
        article_title: title,
        author_id: authorId,
        article_content: content,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  return (
    <Container component="main" maxWidth="md" className="container-article">
      <div className="article-area">
        <div className="article-header">
          <Typography component="h1" variant="h5">
            Publicação
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Título do artigo"
            className="article-title"
            name="article_title"
            type="text"
            color="primary"
            style={{ background: '#f8f9fc' }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Id do autor"
            className="author-id"
            name="author_id"
            type="text"
            color="primary"
            style={{ background: '#f8f9fc' }}
            onChange={(e) => setAuthorId(e.target.value)}
          />
          <TextareaAutosize
            aria-label="Escreva seu texto"
            style={{ width: 852, height: 320 }}
            color="primary"
            className="article-content"
            name="article_content"
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Criar!
          </Button>
        </form>
      </div>
    </Container>
  );
}
