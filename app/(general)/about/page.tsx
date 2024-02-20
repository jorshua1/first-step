import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "About Page Description",
    keywords: "About, Page, Description, Keywords",
};

export default function AboutPage(){
    return (
        <>
            <span className={
                "text-7xl font-bold text-center"
            }>About Page</span>
        </>
    )
}