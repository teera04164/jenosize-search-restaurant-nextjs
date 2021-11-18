import React, { useContext, useState, useEffect } from "react"

const GlobalContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {
    const [resultSearch, setResultSearch] = useState([])
    const [loadding, setLoadding] = useState(false)

    const value = {
        resultSearch,
        setResultSearch,
        loadding,
        setLoadding
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
