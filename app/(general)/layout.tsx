import {Navbar} from "@/components"
import React from "react";

export default function SecoundLayout({children}: { children: React.ReactNode; }) {
    return (
        <>
            <Navbar/>
            <main className={"flex flex-col items-center p-24"}>
                {children}
            </main>
        </>
    )
}