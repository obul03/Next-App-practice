'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import cn from 'classnames';


function SideBar({ user }: { user: UserProps }) {
  const pathName = usePathname();

  return (
    <section className="sidebar">
      {/* Logo Section */}
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/logo.svg"
            width={35}
            height={35}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizone</h1>
        </Link>

        <div className="flex flex-col gap-4">
          {sidebarLinks.map((item) => {
            const isActive =
              pathName === item.route || pathName.startsWith(`&{item.route}/`)

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex items-center gap-2 p-2 rounded-md hover:bg-gray-100',
                  { 'bg-bank-gradient': isActive }
                )}
              >
                <div className='relative'>
                  <Image
                    src={item.imgURL || '/icons/default-icon.svg'} // Optional chaining for fallback
                    alt={`${item.label} icon`}
                    height={20}
                    width={20}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {item.label}
                </p>

              </Link>
            );
          })}
        </div>
        user
      </nav>
      footer
    </section>
  );
}

export default SideBar;
