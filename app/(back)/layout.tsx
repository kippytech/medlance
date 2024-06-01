import { getCurrentUser } from '@/actions/getCurrentUser';
import DashNavBar from '@/components/Dashboard/DashNavBar';
import SideBar from '@/components/Dashboard/SideBar';
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
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] g-blu-950">
      <SideBar />      
      <div className="flex flex-col">
        <DashNavBar
          user={{
            name: user.name,
            image: user.image,
            email: user.email,
          }}
        />
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}

export default Layout