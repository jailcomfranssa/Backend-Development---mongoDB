# 📚 Backend Development - MongoDB

Este projeto é uma API RESTful desenvolvida em **Node.js**, utilizando **Express** e **Mongoose** para integração com o **MongoDB**.  
Ele foi criado com o objetivo de praticar conceitos de backend moderno, como CRUD completo, estrutura modular e boas práticas de logs e variáveis de ambiente.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **Express** – Framework minimalista para criação de APIs  
- **MongoDB** – Banco de dados NoSQL orientado a documentos  
- **Mongoose** – ODM para modelagem de dados no MongoDB  
- **Dotenv** – Gerenciamento seguro de variáveis de ambiente  
- **Nodemon** – Atualização automática do servidor durante o desenvolvimento  
- **Chalk** – Estilização colorida dos logs no console  

---


## ⚙️ Configuração do Ambiente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/03-Backend-Development-MongoDB.git
   cd 03-Backend-Development-MongoDB
   ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```
3. **Crie o arquivo .env na raiz do projeto e adicione:**
    ```bash
    MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/
    PORT=3000
    ```
4. **Inicie o servidor:**
    ```bash
    npm run dev
    ```

---
## 🧠 Funcionalidades Principais
✅ Criação de novos livros (POST /books)

📖 Listagem de todos os livros (GET /books)

🔍 Busca por ID (GET /books/:id)

✏️ Atualização de livros (PUT /books/:id)

🗑️ Remoção de livros (DELETE /books/:id)

⚠️ Tratamento de erros personalizados

🧾 Logs coloridos e informativos no console

---
## 🧠 🧩 Exemplo de Log Colorido
[28/10/2025, 18:01:34] ✅ SUCCESS: MongoDB connected successfully

[28/10/2025, 18:03:12] ℹ️  INFO: New book added successfully: { title: "Clean Code" }

[28/10/2025, 18:04:47] ⚠️  WARNING: Book with ID 654123c8a1b23f6e9d9d123 not found.

[28/10/2025, 18:05:10] ❌ ERROR: Error fetching book by ID: Cast to ObjectId failed

###
</br>

---
###

[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![JSON](https://img.shields.io/badge/JSON-000?logo=json&logoColor=fff)](#)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)](#)
[![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](#)


