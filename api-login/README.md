# 🔐 API de Login

Esta é uma API simples de login feita com **Node.js** e **Express**.

## 🚀 Como Rodar

### 📌 Com Node.js

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o projeto:
   ```bash
   node login.js
   ```

---

### 📌 Com Docker

1. Crie a imagem Docker:
   ```bash
   docker build -t api-login .
   ```

2. Execute o container:
   ```bash
   docker run -p 3000:3000 api-login
   ```

---

## 🧪 Como Testar

### 📦 Pré-requisitos

- Ter o **Postman** ou **Insomnia** instalado para testar a API

### 📝 Passos

1. Utilize a seguinte URL:
   ```
   http://localhost:3000/login
   ```

2. Envie uma requisição `POST` com o corpo no formato JSON:
   ```json
   {
     "usuario": "Ana Carolina",
     "senha": "ana123"
   }
   ```

3. ✅ Usuários disponíveis:

| Usuário         | Senha     |
|-----------------|-----------|
| Ana Carolina    | ana123    |
| João Augustto   | joao123   |

---
