import { createContext, useState } from "react";

export const DetailMovieContext = createContext(null)

export default function DetailMovieProvider({ children }) {
    const value = useState(null)
    return <DetailMovieContext.Provider value={value}>
        {children}
    </DetailMovieContext.Provider>
}