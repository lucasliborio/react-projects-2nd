import { ItemsContextProvider } from "./items-context";
import { ListContextProvider } from "./lists-contexts";

export const AppContext = ({children}) => {
  return (
    <ListContextProvider>
      <ItemsContextProvider>
        {children}
      </ItemsContextProvider>
    </ListContextProvider>
  )
}