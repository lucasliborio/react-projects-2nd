### Chapter 1 - building SPA

##### Instalando dependencias

* **webpack & webpack-cli**
  * instalamos essas dependencias e criamos dois scripts start and build.
* **react & react-dom**
  * dependencias para utilizar as features do react
* **@babel/core babel-loader @babel/preset-env @babel/preset-react ts-loader**
  * dependencias necessarias para fazer com que o codigo javascript que eu escrever seja compativel com qualquer navegador.
  * Babel tambem nos ajuda a integrar o react com o webpack.

##### Buildando o projeto
* basicamente criei o webpack.config.js e adicionei todas as informações que queria para meu bundle.
* Exemplo
  * Os loaders para transpilar meu codigo ts.
  * o path dos arquivos
  * servidor local com webpack-dev-server