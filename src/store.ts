import { createContext } from "react";


const initialState =  {
    size: window.innerWidth,
    isLoggedIn: false
}


const screenContext = createContext(initialState)

export default screenContext