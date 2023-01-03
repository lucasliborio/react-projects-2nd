import { createContext, useCallback, useReducer, useState } from "react";

export const ItemsContext = createContext()


export const ItemsContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    loading: true,
    error: ''
  }
  const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'CLEAN_ITEMS':
        return {
          ...state,
          loading:false,
          items:[]
        }
      case 'ADD_ITEM_SUCESS':
        return {
          ...state,
          items: [...state.items, payload],
          loading: false
        }
      case 'GET_ITEMS_SUCESS':
        return {
          ...state,
          items: payload,
          loading: false
        }
      case 'GET_ITEMS_ERROR':
        return {
          ...state,
          items: [],
          loading: false,
          error: payload
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchItems = useCallback(async (listId) => {
    try {

      const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}/items`);
      const result = await data.json()
      if (result) {
        dispatch({ type: 'GET_ITEMS_SUCESS', payload: result })
      }

    }
    catch (error) {
      dispatch({ type: 'GET_ITEMS_ERROR', payload: error.message })
    }
  }, [])
  const cleanItems = () => dispatch({type:'CLEAN_ITEMS'})
  
  const addItem = useCallback(async ({ listId, title, quantity, price }) => {
    const itemId = Math.floor(Math.random() * 1000)
    try {
      const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/items`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: itemId,
            listId,
            title,
            quantity,
            price,
          }),
        },
      );
      const result = await data.json()
      console.log("RESULT ITEMS FETCH", result)
      if (result){
        dispatch({
          type: "ADD_ITEM_SUCESS",
          payload: {
            id: itemId,
            listId,
            title,
            quantity,
            price
          }
        })
      }
    } catch (error) {

    }
  }, [])
  return (
    <ItemsContext.Provider value={{ ...state, fetchItems, addItem, cleanItems}}>
      {children}
    </ItemsContext.Provider>
  )
}

