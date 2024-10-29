# Use uma imagem base do Node.js com a versão recomendada (16.14.0 ou superior)
FROM node:16-alpine

# Crie o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e package-lock.json para o container
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o container
COPY . .

# Defina o comando para iniciar a aplicação
CMD ["npm", "run", "dev"]