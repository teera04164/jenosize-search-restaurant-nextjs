import React, { useContext, useState, useEffect } from "react"

const GlobalContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {
    const [resultSearch, setResultSearch] = useState([])

    const value = {
        resultSearch,
        setResultSearch
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
