const express = require('express');
const path = require('path');
const app = express();

// Faz o Express entender que a raiz e a pasta assets são públicas
app.use(express.static(path.join(__dirname, '../'))); 

// Rota para abrir o index.html quando alguém acessar o site
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// O Render usa a variável de ambiente PORT, se não existir, usa a 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});