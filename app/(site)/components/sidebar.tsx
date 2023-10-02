"use client" 
import { createContext } from "react";


const SideBarContext = createContext({});

export function SideBar() {
    return (
        <SideBarContext.Provider value={{}}>
            <div>Контекст</div>
        </SideBarContext.Provider>
    )
}