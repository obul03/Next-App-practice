'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function MobileNav({ user }: { user: UserProps }) {
  const pathName = usePathname();
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="hamburger" height={30} width={30}></Image>
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-white'>
          <Link href="/" className="mb-12 flex items-center gap-2 cursor-pointer ">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="logo"
            />
            <h1 className="text-26 font-ibm-plex-serif">Horizone </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>


              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathName === item.route || pathName.startsWith(item.route);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'mobilenav-sheet_close w-full',
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
                        <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                          {item.label}
                        </p>

                      </Link>
                    </SheetClose>

                  );
                })}
                user
              </nav>
            </SheetClose>
          </div>


        </SheetContent>
      </Sheet>


    </section>
  )
}

export default MobileNav