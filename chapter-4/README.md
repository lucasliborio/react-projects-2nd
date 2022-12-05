### Concepts

##### NextJS - setup

- Setando um projeto com create-next-app --typescript
- Instalando styled components

##### Sobre estilos

- no nextjs é criado uma pasta sytle que serve para receber os arquvios de style de cada component

###### Sobre o routing

- No nextJS temos o filesystem ajudando na criação das rotas, partindo sempre do diretorio 'pages'. Cada pasta criada com index.tsx será entendida como uma route
- exemplo
  - questions/index.tsx == localhost:3000/questions

###### Criando Rotas com parametros

- Para criarmos rotas que recebem paramentros, adicionamos o conteudo do parametro entre cochetes
- exemplo

  - [id].tsx
    - cria uma rota que recebe um parameter [id]
    - dentro do arquivo utilizaremos o useRouter() que irá receber esse parametro para gente

- ```javascript
  function QuestionDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState<Question>({} as Question);
  ```

```

```

###### Paginação

- Primeiramente nos criamos um componente de paginação que irá contrololar as paginas no footer
- Uma variavel hasMore deve ser pensada pelo backend, caso contrario, seria necessario fazer uma ultima requisão esperando array vazio.
  - Exemplo
    - Estou puxando noticias de um api, cada request vem com uma variavel hasMore, inidicando que uma proxima requisiçãoo será feita e ainda exisitirá noticias para serem mostradas.
    - Caso a variavle não exista, o front end tem que fazer a request antes para saber se veio vazia. Não possibilitando mostrar uma numeração correta de paginas.
