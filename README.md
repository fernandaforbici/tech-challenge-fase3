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


