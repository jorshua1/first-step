import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Pagina de contacto",
    keywords:"Contact"
}

export default function ContactPage(){
    return (
        <>
            <span className={
                "text-7xl font-bold text-center"
            }>Contact Page</span>
        </>
    )
}