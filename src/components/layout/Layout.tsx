import React, { PropsWithChildren } from "react"
import { useAppSelector } from "@/store/hook"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }: PropsWithChildren) => {
  const { darkTheme } = useAppSelector((state) => state.theme)
  return (
    <div className={`${darkTheme && "dark"} text-black `}>
      <div className=" bg-white transition duration-200 dark:bg-black dark:text-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
