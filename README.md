# Listo.ai - Aplicativo Mobile 📱🛒  


  
  *Aplicativo de Listas de Compras Inteligente*  
  ![GitHub](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
</div>

## 📌 Visão Geral  

O **Listo.ai** é seu assistente pessoal para:  
- 🏠 **Criar listas** de compras inteligentes em casa  
- 🛒 **Controlar gastos** no mercado em tempo real  
- 📊 **Analisar** seus hábitos de consumo  
- 🔐 Sincronização segura entre dispositivos  

## 🛠 Stack Tecnológica  

### Frontend Mobile  
- React Native (Expo)  
- TypeScript  
- Context API (gerenciamento de estado)  
- React Navigation 6  
- Axios (chamadas à API)  
- Expo Secure Store (armazenamento seguro)  

### Backend  
- Java Spring Boot  
- PostgreSQL  
- Autenticação JWT  
- Docker (containerização)  

## 🚀 Primeiros Passos  

### Pré-requisitos  
✅ Node.js 18+  
✅ Expo CLI (`npm install -g expo-cli`)  
✅ Java 17+ (para backend)  
✅ PostgreSQL 14+  

### Instalação Local  
```bash 
# Clone o repositório
git clone https://github.com/luizhenriquecaldas/listo-mobile.git

# Acesse a pasta do projeto
cd listo-mobile

# Instale as dependências
yarn install

# Configure as variáveis de ambiente
cp .env.example .env
Executando o App
bash
# Modo desenvolvimento
expo start

# Android (emulador)
expo start --android

# iOS (simulador - requer Mac)
expo start --ios
🔧 Configuração do Ambiente
Backend:

Guia de configuração do Spring Boot

Banco de Dados:

sql
CREATE DATABASE listoai;
CREATE USER listouser WITH PASSWORD 'listopass';
GRANT ALL PRIVILEGES ON DATABASE listoai TO listouser;
Variáveis de Ambiente (.env):

env
API_URL=http://localhost:8080
GOOGLE_MAPS_API_KEY=your_key_here
📱 Telas Principais
Tela	Descrição
Login	Autenticação segura com JWT
Listas	Visualização de todas as listas
Modo Mercado	Controle de produtos e preços
Análise	Gráficos de gastos mensais
🏗 Estrutura do Projeto
text
listo-mobile/
├── assets/            # Ícones, imagens e fonts
├── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── contexts/      # AuthContext, ThemeContext
│   ├── hooks/         # useAuth, useLists
│   ├── navigation/    # Stack e Tab navigation
│   ├── screens/       # Todas as telas do app
│   ├── services/      # API service (axios)
│   └── types/         # Interfaces TypeScript
├── .env.example       # Modelo de variáveis de ambiente
└── app.json           # Configuração do Expo
🤝 Como Contribuir
Faça um fork do projeto

Crie uma branch:

bash
git checkout -b feat/nova-feature
Commit suas mudanças:

bash
git commit -m "feat: adiciona nova funcionalidade"
Envie para o repositório:

bash
git push origin feat/nova-feature
Abra um Pull Request

📜 Licença
MIT License - veja o arquivo LICENSE para detalhes.
