import { Link } from "gatsby"
import React from "react"
import * as headerStyles from './header.module.scss'
const Header = () => {
    return (
        <header className={headerStyles?.header}>
            <h1 className={headerStyles?.title}>Muhammad Bilal</h1>
            <ul className={headerStyles?.navList}>
                <li>
                    <Link
                        className={headerStyles?.navItem}
                        activeClassName={headerStyles?.activeNavItem}
                        to="/"
                    >Home</Link>
                </li>
                <li>
                    <Link
                        className={headerStyles?.navItem}
                        activeClassName={headerStyles?.activeNavItem}
                        to="/blog">Blog</Link>
                </li>
                <li>
                    <Link
                        className={headerStyles?.navItem}
                        activeClassName={headerStyles?.activeNavItem}
                        to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header