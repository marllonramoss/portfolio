FROM node:20-slim

WORKDIR /app

# Copiar apenas os arquivos necessários para instalar dependências
COPY backend/package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY backend/ .

# Build da aplicação
RUN npm run build

# Expor a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "run", "start:prod"] 