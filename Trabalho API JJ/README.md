# API REST com Node.js, MySQL e Arquitetura MVC

**Aluno:** João Pedro Gonçalves  
**Turma:** SE-3A-N-MTEC-N Desenvolvimento de Sistemas-222-20260  
**Disciplina:** Programação Web III (PW3)

Projeto da Atividade Prática 02: refatoração de uma API REST para arquitetura MVC com Node.js, Express e MySQL.

## Arquitetura MVC

- **config/:** gerencia a conexão com MySQL usando pool e carrega variáveis de ambiente.
- **models/:** camada de dados; concentra exclusivamente as consultas SQL parametrizadas.
- **controllers/:** valida os dados, chama o Model e envia respostas HTTP em JSON.
- **routes/:** define os endpoints e associa os métodos HTTP às funções do Controller.
- **app.js:** configura middlewares e registra rotas, sem consultas SQL.
- **server.js:** inicializa o servidor.
- **View:** por ser uma API REST, é representada pelas respostas JSON do Express.

## Estrutura

```text
joao-pedro-goncalves-API-node-mvc/
├── src/
│   ├── config/db.js
│   ├── models/usuarioModel.js
│   ├── controllers/usuarioController.js
│   ├── routes/usuarioRoutes.js
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
├── schema.sql
└── README.md
```

## Como executar

1. Instale Node.js, npm e MySQL.
2. No terminal, dentro da pasta do projeto, execute `npm install`.
3. Execute o conteúdo de `schema.sql` no MySQL para criar o banco `pw3_api` e a tabela `usuarios`.
4. Copie `.env.example` para um arquivo chamado `.env` e preencha as credenciais do seu MySQL:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=pw3_api
DB_PORT=3306
PORT=3000
```

5. Inicie a API com `npm start` ou `npm run dev`.
6. Acesse `http://localhost:3000`.

**Importante:** ajuste usuário, senha e porta conforme seu MySQL. Não envie o arquivo `.env` ao GitHub.

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/usuarios` | Lista usuários |
| POST | `/usuarios` | Cadastra usuário |
| PUT | `/usuarios/:id` | Atualiza usuário pelo ID |
| DELETE | `/usuarios/:id` | Exclui usuário pelo ID |

Exemplo de JSON para POST e PUT:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

## Segurança e tratamento de erros

As consultas usam placeholders `?` e parâmetros separados para evitar concatenação direta de valores SQL. As rotas são tratadas com `try/catch`, validação de campos e respostas HTTP como 200, 201, 400, 404 e 500. O `.gitignore` bloqueia `node_modules/` e `.env`; o `.env.example` contém apenas valores de exemplo.
