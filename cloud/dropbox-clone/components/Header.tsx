import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
            <div className="bg-[#0160fe] w-fit">
        <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            className="invert"
            height={50}
            width={50}
          />
          </div>
        <h1 className="font-bold text-xl">MyBox</h1>
        </Link>

        {/* Theme toggler */ }
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
    </header>
  )
}

export default Header