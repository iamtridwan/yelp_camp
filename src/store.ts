import { createContext } from "react";

type state ={
    size: number,
    isLoggedIn: boolean,
    userName: string | null
}

const initialState: state = {
  size: window.innerWidth,
  isLoggedIn: false,
  userName : null,
};

const screenContext = createContext(initialState);

export default screenContext;
