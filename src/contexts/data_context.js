import React, { createContext, useContext, useEffect, useState } from "react";

const dataContext = createContext();

const response = require('../data/home_content.json');
export function DataContextProvider({ children }) {
    const [homepage_data, setHomePageData] = useState(response ?? {});
    return (
        <dataContext.Provider value={{ homepage_data }}>
            {children}
        </dataContext.Provider>
    );
}

export function useData() {
    return useContext(dataContext);
}
