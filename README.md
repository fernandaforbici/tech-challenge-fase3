# Tech Challenge Blog - Fase 03

Projeto desenvolvido para o Tech Challenge da Fase 03 da Pós Tech Full Stack Development.

## Objetivo

Desenvolver uma interface gráfica em React para uma aplicação de blogging, permitindo que alunos visualizem postagens e professores autenticados possam criar, editar, excluir e administrar posts.

## Tecnologias previstas

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Styled Components
- Formik
- Yup
- Vitest
- React Testing Library
- Docker
- GitHub Actions

## Status do projeto

Em desenvolvimento.

## Funcionalidades implementadas

- Listagem pública de posts
- Busca de posts por palavra-chave
- Leitura completa de post
- Login de professores
- Criação de posts
- Edição de posts
- Exclusão de posts
- Área administrativa protegida

## Status das funcionalidades

| Funcionalidade        | Status                    |
| Listagem de posts     | Implementado com mock     |
| Busca de posts        | Implementado com mock     |
| Leitura de post       | Em desenvolvimento        |
| Login                 | Em desenvolvimento        |
| Área administrativa   | Em desenvolvimento        |

## A aplicação será executada em :
http://localhost:5173

## Rotas da aplicação
Rota                | Descrição                     | Permissão de acesso
`/`                 | Lista pública  de posts       | Público
`/posts/:id`        | Leitura detalhada do post     | Público
`/login`            | Login para usuário autenticado| Público
`/posts/new`        | Criação de posts              | Protegido
`/posts/:id/edit`   | Edição de post                | Protegido
`/admin`            | administração de Postagens    | Protegido

## Como executar

```bash
npm install
npm run dev

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

```env
VITE_API_URL=http://localhost:3000
