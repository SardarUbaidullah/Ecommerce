import { Link } from '@inertiajs/react';
import React from 'react'
import { Button } from '../ui/button';

function Navbar() {
    const navItems:{name:string;href:string}[] = [
        {
            name:"Home",
            href: '/'
        },
        {
            name: "Test",
            href: "/test"
        }
    ]
  return (
      <nav className='flex w-full justify-between h-20 items-center bg-red-400 px-20'>
        <h1>Ubiad Ka E-com LOGO</h1>
        <ul className='flex items-center  gap-x-5 text-sm font-bold'>
           
           {
            navItems.map((navitem,i) => {
                return(
                    <li
                    key={i}
                    >
                        <Link
                        href={navitem.href}
                        >
                        {navitem.name}
                        </Link>
                    </li>
                )
            })
           }
        </ul>
        <button
        onClick={() => alert("Hn Beta ready reh aj result ha!!")}
        className='px-6 py-3 bg-neutral-300 text-black rounded-full'>
            Getting started
        </button>
      </nav>
  )
}

export default Navbar
