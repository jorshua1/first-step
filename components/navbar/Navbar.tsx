import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components";

const navItems = [
    {path: "/about", title: "About"},
    {path: "/contact", title: "Contact"},
    {path: "/pricing", title: "Pricing"},
]
export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

            <Link className={"m-2 flex items-center"} href={"/"}>
                <HomeIcon className={"mr-1"}/>
                <span>Home</span>
            </Link>
            <div className={"flex flex-1"}></div>
            {
                navItems.map(navItem => <ActiveLink key={navItem.title} path={navItem.path}
                                                    text={navItem.title}></ActiveLink>)
            }
        </nav>
    )
}
