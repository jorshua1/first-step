import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <span className={"text-5xl"}>Hola mundo</span>
            <Link className={"p-4 mt-4 bg-blue-800 bg-opacity-30 hover:bg-blue-900 transition-all text-green-500 rounded-2xl"}
                  href={'/about'}>About page</Link>
        </main>
    );
}
