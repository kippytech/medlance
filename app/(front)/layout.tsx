import { Footer } from '@/components/Frontend/Footer';
import FrontNavbar from '@/components/Frontend/FrontNavbar';
import MegaMenu from '@/components/Frontend/MegaMenu';
import Navbar from '@/components/Frontend/Navbar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

async function Layout({children}: LayoutProps) {
  const session = await getServerSession(authOptions)

  const user = session?.user

  if (!user) {
    return notFound()
  }
  return (
    <div className='bg-blue-950 min-h-screen'>
      <FrontNavbar
        user={{
          name: user.name,
          image: user.image,
          email: user.email,
        }}
      />
        {/* <Navbar /> */}
        {/* <div className="max-w-5xl mx-auto py-4 sticky top-20 z-30">
            <MegaMenu />
        </div> */}
        <div className='min-h-'>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout