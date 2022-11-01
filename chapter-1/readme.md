### Chapter 1 - building SPA

#### Instalando dependencias

* **webpack & webpack-cli**
  * instalamos essas dependencias e criamos dois scripts start and build.
* **react & react-dom**
  * dependencias para utilizar as features do react
* **@babel/core babel-loader @babel/preset-env @babel/preset-react ts-loader**
  * dependencias necessarias para fazer com que o codigo javascript que eu escrever seja compativel com qualquer navegador.
  * Babel tambem nos ajuda a integrar o react com o webpack.

#### Buildando o projeto
* Basicamente criei o webpack.config.js e adicionei todas as informações que queria para meu bundle.
* Exemplo
  * Os loaders para transpilar meu codigo ts quanto para o css.
  * o path para output dos arquivos
  * servidor local com webpack-dev-server
  * resolve para algumas extensões .js .ts .css

#### React concepts
##### React Hooks
* React Hooks são features lançadas na versão 16.8 que possibilitam a utilização das principais funcionalidades sem precisar usar class components. 
* **useState**
  * Qualquer coisa armazenada
no estado podem ser passadas para os componentes de baixo nível, que são chamados depois de **'props'**. Um exemplo simples de usar state no React é usar o useState Hook, que pode ser usado para armazenar e atualizar variáveis. Toda vez que essas variáveis ​​mudam usando o update que é retornado pelo hook (setState) useState, nosso componente será renderizado novamente.
* **useEffect**
  * O useEffect Hook é usado para lidar com efeitos colaterais, seja quando o o aplicativo é montado ou quando o estado ou um prop é atualizado. Este gancho leva dois parâmetros, onde o primeiro é um callback e o segundo é um array contendo todas as variáveis ​​das quais este Hook depende – o chamado array de dependência. Quando qualquer um essas dependências mudarem, o retorno de chamada para este Gancho será chamado. Quando não há valores neste array, o Hook será chamado constantemente. Depois que os dados são puxados da API, o estado será atualizado com os resultados.