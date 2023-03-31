'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    categories: any[],
    setCategories: Dispatch<SetStateAction<any[]>>,
}

const GlobalContext = createContext<ContextProps>({
    categories: [],
    setCategories: (): {}[] => []
})

export const GlobalContextProvider = ({ children }: { children: any }) => {
    const [categories, setCategories] = useState<{}[]>([])
    return (
        <GlobalContext.Provider value={{ categories, setCategories }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)