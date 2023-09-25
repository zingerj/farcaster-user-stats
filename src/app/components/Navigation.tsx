"use client";

import style from '../css/Navigation.module.css'
import { usePathname } from 'next/navigation'


export default function Navigation() {

    const pathname = usePathname()
    let home = pathname == "/" ? style.selectedTab : (pathname.includes("/users/") ? style.selectedTab : "")
    let trending = pathname == "/trending" ? style.selectedTab : ""

    return (
        <>
            <div className="navigation">
                <nav>
                    <ul>
                        <li><a className={home} href="/">Back Home</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}