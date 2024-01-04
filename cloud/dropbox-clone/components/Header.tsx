import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/">
        <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            className="invert"
            height={50}
            width={50}
          />
        <h1 className="font-bold text-xl">Dropbox</h1>
        </Link>
    </header>
  )
}

export default Header