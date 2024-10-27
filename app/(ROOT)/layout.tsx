import SideBar from '@/components/SideBar';
import Image from 'next/image';
import React from 'react'
import MobileNav from '@/components/MobileNav'
const Home = ({ children }: { children: React.ReactNode }) => {
  const loggedIn = { firstName: 'obul', lastName: 'reddy' }
  return (
    <main className='flex h-screen w-full font-inter'>
      <SideBar user={loggedIn} />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image
            src="/icons/logo.svg"
            alt='logo'
            height={30}
            width={30}
          ></Image>
          <div>
            <MobileNav user={loggedIn} />
          </div>

        </div>
        {children}
      </div>

    </main>
  )
}
export default Home;