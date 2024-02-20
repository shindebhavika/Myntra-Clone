import { Children, createContext } from "react";

 export const ShopContext=createContext()


const shopContextProvider=({Children})=>{
  
return <ShopContext.Provider  >{Children}</ShopContext.Provider>
}
export default shopContextProvider