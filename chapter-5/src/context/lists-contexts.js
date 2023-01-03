import { createContext, useCallback, useReducer } from "react";

export const ListContext = createContext();

const initialState = {
  lists: [],
  list: {},
  loading: true,
  error: ''
}
const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_LISTS_SUCESS':
      return {
        ...state,
        lists: payload,
        loading: false
      }
    case 'GET_LISTS_ERROR':
      return {
        ...state,
        lists: [],
        loading: false,
        error: payload
      }
      case 'GET_LIST_SUCESS':
        return {
          ...state,
          list: payload,
          loading: false
        }
      case 'GET_LIST_ERROR':
        return {
          ...state,
          list: {},
          loading: false,
          error: payload
        }
    default:
      return state
  }
}
export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("-----LISTS CONTEXT",state)
  const fetchLists = useCallback(async () => {
    try {

      const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists`)
      const result = await data.json()

      if (result) {
        dispatch({ type: 'GET_LISTS_SUCESS', payload: result })
      }
    } catch (error) {
      dispatch({ type: 'GET_LISTS_ERROR', payload: error.message })
    }

  }, [])
  const fetchList = useCallback(async (listId) => {
    try {

      const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}`)
      const result = await data.json()

      if (result) {
        dispatch({ type: 'GET_LIST_SUCESS', payload: result })
      }
    } catch (error) {
      dispatch({ type: 'GET_LIST_ERROR', payload: error.message })
    }

  }, [])
  return (
    <ListContext.Provider value={{ ...state, fetchLists, fetchList }}>
      {children}
    </ListContext.Provider>
  )
}