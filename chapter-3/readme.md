### Chapter 3

### Conceitos aprendidos

- Criamos um drag and drop utilizando HTML Drag and Drop API

### Setup

- Adicionamos as propriedades "onDragStart" "onDrop" "onDragOver"

#### Drag and Drop

- Arquivo: components/board

###### onDragOver

- Essa é a mais simples tempo em vista que só precisamos criar uma função que recebar o "event" dar um preventDefault() nesse event

###### onDragStart

- Adicionado no elemento que iremos mover, que nesse caso são os cards das tasks.
- Adicionamos a propriedade "draggable" e a propriedade "onDragStart" nas div container
- Passamos uma função como argumento que recebe "event" e "id"

```javascript
function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}
```

##### onDrop

- Adicionado no elemento que iremos receber o draggable

### Styled components

- Install styled components e apartir de agora crie os estilos de todo component dentro de um arquvio ts.
- Estrutura do styled

  - styled.{nome do elemento html}
  - Após isso abre as crases e todo conteudo lá dentro será conteudo css
  - para melhor visualização do codigo css no javascript install styled components no vscode

```javascript
const TaskWrapper = styled.div`
  background: darkgray;
  padding: 20px;
  border-radius: 20px;
  margin: 0 5% 5% 5%;

  h3 {
    width: 100%;
    margin: 0;
  }
`;
```

- Global style

```javascript
export const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

`;
