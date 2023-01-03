##### React Context

##### Criando um contexto

- Utilizando o metodo createContext() nós criamos um contexto com react. Ao criar um contexto nós temos dois componentes react Provider e Consumer

```javascript
export const ListContext = createContext();

export const ListContextProvider:React.Element = () => {
  return (
    <ListContext.Provider value={}>
      {children}
    </ListContext.Provider>;
  )
}

```

- A partir do provider que nos seriviremos os dados que serão utilizados no contexto.

##### Entendendo melhor a necessidade do context e como evitar renders desnecessarios.
