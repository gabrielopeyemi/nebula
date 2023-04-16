import Link from "next/link"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import ThemeButton from "./ThemeButton"

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200  py-4 px-14 dark:text-white sm:px-8">
      <Link href="/">LOGO</Link>
      <div className="hidden md:block">
        <ThemeButton />
      </div>
      <AiOutlineMenu width={40} height={40} className="hidden md:block" />
      <div className="flex basis-4/6 items-center  justify-between text-sm font-normal md:hidden">
        <div className="flex items-center justify-between gap-5">
          <Link href="/careers">Careers</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <p className="rounded-md bg-button-black py-2 px-4 font-normal text-white dark:bg-white dark:text-black">
            <Link href="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
