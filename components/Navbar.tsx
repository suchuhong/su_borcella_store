'use client'

import { CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { UserButton, useUser } from '@clerk/nextjs'

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const { user } = useUser()

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        {/* home */}
        <Link href="/">Home</Link>
      </div>

      <div className="relative flex gap-3 items-center">
        {/* cart */}
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart {0}</p>
        </Link>
        {/* menu */}
        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {/* 下拉动作 */}
        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
            <Link
              href={user ? '/wishlist' : '/sign-in'}
              className="hover:text-red-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? '/orders' : '/sign-in'}
              className="hover:text-red-1"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart {0}</p>
            </Link>
          </div>
        )}
        {/* user按钮 */}
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
