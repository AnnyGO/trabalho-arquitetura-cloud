
# Aqui eu tô usando uma imagem base do node.js
FROM node:18-alpine

# Aqui eu tô definindo o diretório pro container
WORKDIR /app

# Aqui eu estou fazendo uma cópia dos arquivos para dentro do container
COPY package.json package-lock.json ./

# Aqui eu instalo as dependências do meu projeto
RUN npm install

COPY . .

# Aqui eu exporto a porta onde a API vai rodar
EXPOSE 3000

# Aqui eu defino o comando para iniciar a aplicação
CMD ["node", "login.js"]
