#  Simple ToDo App - Full Stack com TypeScript

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

![image](https://github.com/user-attachments/assets/6abb1468-4616-4aef-8063-73abc36df4c0)

## Descrição 
Aplicação simples de tarefas (ToDos), com interface leve, moderna e intuitiva, desenvolvida inteiramente com a stack TypeScript. No front end, são utilizadas as tecnologias React.js, Vite, Jotai, Framer Motion e Tailwind CSS. No back end, Express.js e MongoDB (em Docker). É possível criar, editar, validar e excluir tarefas.
Este projeto teve como objetivo o aprendizado e a consolidação dos conceitos e ferramentas utilizadas.

## Tecnologias

* **Front End:** React.js, Tailwind.CSS, Framer Motion, Vite, Jotai, TypeScript
* **Back End:** Node.js, Express.js, MongoDB (em Docker), TypeScript

## Instalação e Execução

#### Requisitos

* Node.js (v18+ recomendado)
* Gerenciador de pacotes `pnpm`
* Docker com Docker Compose (para MongoDB)

#### Clonando o repositório

```bash
git clone https://github.com/DAN-3200/simple-todo-app.git
```

#### Configurando e iniciando o MongoDB com Docker

```.env
# .env (do diretório principal)
USERNAME_DB=admin
PASSWORD_DB=4321
```

```bash
docker-compose up -d mongo
```

#### Configurando e iniciando o Back End

```.env
# .env (back)
MONGO_URI=mongodb://admin:4321@localhost:27000
```

```bash
cd back
pnpm install
pnpm run dev
```

#### Iniciando o Front End

```bash
cd front
pnpm install
pnpm run dev
```

## Endpoints da API
A API pode ser testada via Postman:

[Collection Postman](https://www.postman.com/dan-3200/workspace/publico/collection/43029232-49f5a658-a5b4-45b3-939d-c21cfa10f67c?action=share&creator=43029232)

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
