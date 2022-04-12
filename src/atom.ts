import { atom } from "recoil"

export const screenSize = atom({
    key: "screenSize",
    default: window.innerWidth
})

export const isLoggedIn = atom({
    key: "loggedIn",
    default: false
})

export const userName = atom({
    key: "user",
    default: ""
})