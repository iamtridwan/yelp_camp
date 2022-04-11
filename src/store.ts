import { createContext } from "react";


const initialState =  window.innerWidth


const screenContext = createContext(initialState)

export default screenContext