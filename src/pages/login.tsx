import React from "react"
import laptop from "../assets/laptop.png"
import Image from "next/image"
import type { NextPage } from "next"

const login: NextPage = () => {
  return (
    <div className="flex min-h-[90vh]">
      <div className="relative flex-1 object-cover">
        <Image src={laptop} alt="laptop" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-1"></div>
    </div>
  )
}

export default login
