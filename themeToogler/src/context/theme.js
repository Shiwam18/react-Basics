import React, { createContext, useContext, useState } from "react"; 

export const themeChanger = createContext({
    themeMode: 'light',
    lightTheme: ()=>{},
    darkTheme: ()=>{},
})

export const ThemeProvider = themeChanger.Provider

export default function useTheme(){
    return useContext(themeChanger)
}

