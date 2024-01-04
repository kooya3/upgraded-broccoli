import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/">
        <h1 className="font-bold text-xl">Dropbox</h1>
        </Link>
    </header>
  )
}

export default Header