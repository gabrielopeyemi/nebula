import { data } from "@/utils/data"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="px-20 pt-14 pb-10 md:px-14">
      <div className="flex flex-col gap-5">
        <div className="font-noraml grid grid-cols-6 gap-10 font-roboto dark:text-white md:grid-cols-5 xm:grid-cols-4 sm:grid-cols-1">
          <div className="col-span-2 flex flex-col gap-5 sm:col-span-1 sm:gap-3">
            <h1 className=" font-semibold">Logo</h1>
            <p className="text-[12px] dark:text-gray-400">
              <span className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </span>
              <span className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </span>
            </p>
          </div>
          {data.map((item, i) => (
            <div key={i} className="mb-5 flex flex-col gap-5 sm:gap-3">
              <h1 className="font-bold">{item.title}</h1>
              <div className="flex flex-col gap-2">
                {item.links.map((link, i) => (
                  <Link key={i} href={`${link.href}`}>
                    <p className="text-[12px] dark:text-gray-400">{link.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5 border-b-[1px] border-b-gray-400">
          {/* <Link href="/"></Link> */}
        </div>
      </div>
      <p className="mt-5 text-[12px] dark:text-white">
        @ {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
