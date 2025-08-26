import { Head, Link } from '@inertiajs/react'
import { ReactNode } from 'react'
import { NavFooter } from '../nav-footer';
import { LayoutProps, NavItem } from '@/types';
import Navbar from '../navbar/navbar';
export default function Layout({ children, title,username }:LayoutProps) {
    const navitems:NavItem[] = [{
        title: "Home",
        href:'/'
    }]
  return (
    <main>
        <Head title={title} />
     <Navbar />
      <article>
       {username && <h1>Hey {username} </h1>}
        {children}
        </article>
        {/* <NavFooter
        it
        
        /> */}
    </main>
  )
}