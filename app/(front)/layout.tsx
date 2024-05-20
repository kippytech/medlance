import MegaMenu from '@/components/Frontend/MegaMenu';
import Navbar from '@/components/Frontend/Navbar';
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className='bg-blue-950'>
        <Navbar />
        <div className="max-w-5xl mx-auto py-4">
            <MegaMenu />
        </div>
        {children}
    </div>
  )
}

export default Layout