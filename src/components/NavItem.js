import React from 'react'

function NavItem({href, text, special}) {
    return (
        <li>
            <a className={"nav-item "+(special?"special-item":"")} href={href}>
                {text}
            </a>
        </li>
    )
}

export default NavItem