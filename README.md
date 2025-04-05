# Backend Project Steam Prices

Este projeto é uma aplicação de monitoramento de preços de jogos na Steam. Ele envia alertas personalizados por email quando um jogo atinge o preço definido pelo usuário. É uma solução open-source, sem fins lucrativos, voltada para gamers que buscam ofertas. Foi desenvolvido com Node.JS, Typescript, TypeORM e Express.

## Tecnologias Utilizadas

- **Node.js**
- **Express** - Framework para API REST
- **TypeORM** - ORM para interação com banco de dados relacional
- **TypeScript** - Tipagem estática para JavaScript
- **tsup** - Para build do projeto

## Configuração do Projeto

### Instalação das Dependências

```bash
# Usando Yarn
yarn install

# Ou usando NPM
npm install
```

### Scripts Disponíveis

- **Gerar Migration**:
  ```bash
  yarn migration:generate NomeDaMigracao
  ```
- **Criar Migration Manualmente**:
  ```bash
  yarn migration:create NomeDaMigracao
  ```
- **Executar Migrações**:
  ```bash
  yarn migration:run
  ```
- **Reverter Última Migration**:
  ```bash
  yarn migration:revert
  ```
- **Listar Migrações Pendentes**:
  ```bash
  yarn migration:show
  ```
- **Modo Desenvolvimento**:
  ```bash
  yarn dev
  ```
- **Build do Projeto**:
  ```bash
  yarn build
  ```
- **Iniciar o Servidor**:
  ```bash
  yarn start
  ```

### Scripts no `package.json`

```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsup src/index.ts --format cjs --dts --out-dir dist",
  "start": "node dist/index.js",
  "migration:generate": "npx typeorm-ts-node-commonjs migration:generate -d src/data-source.ts -n",
  "migration:create": "npx typeorm-ts-node-commonjs migration:create -d src/migrations/",
  "migration:run": "npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts",
  "migration:revert": "npx typeorm-ts-node-commonjs migration:revert -d src/data-source.ts",
  "migration:show": "npx typeorm-ts-node-commonjs migration:show -d src/data-source.ts"
}
```

## Estrutura do Projeto

```
backend-project-steam-prices/
├── src/
│   ├── controllers/      # Controladores das rotas
│   ├── data-source.ts    # Configuração do TypeORM
│   ├── entities/         # Entidades do banco de dados
│   ├── errors/           # Erros customizáveis
│   ├── middlewares/      # Middlewares para requisições
│   ├── repositories/     # Repositórios de dados
│   │   └── interfaces/   # Contratos dos repositórios
│   ├── routes/           # Definição das rotas
│   ├── services/         # Regras de negócio
│   ├── utils/            # Funções auxiliares
│   └── index.ts          # Ponto de entrada da aplicação
│
├── src/migrations/       # Migrações do banco de dados
├── .env                  # Configuração de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Configuração do projeto e dependências
├── tsconfig.json         # Configuração do TypeScript
├── README.md             # Documentação do projeto
```

## Contribuição

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature-minha-feature`)
3. Commit suas alterações (`git commit -m 'Adicionando minha feature'`)
4. Push para a branch (`git push origin feature-minha-feature`)
5. Abra um Pull Request

---

Este README pode ser melhorado futuramente com mais detalhes sobre endpoints e exemplos de uso da API.