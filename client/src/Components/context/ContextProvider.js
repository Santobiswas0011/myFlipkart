import React, { createContext, useState } from "react";


export const LoginContext=createContext(null);

const ContextProvider=({children})=>{
      const [account,setAccount]=useState("");
      const [cartLength,setCartLength]=useState("");

      return(
         <>
           <LoginContext.Provider value={{account,setAccount,cartLength,setCartLength}}>
                 {children}
           </LoginContext.Provider>
         </>
      )
};


export default ContextProvider;
