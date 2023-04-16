import React from "react"
import arrowBendIcon from "../../assets/arrow-bend-1.svg"
import arrowBendIcon2 from "../../assets/arrow-bend-2.svg"
import Image from "next/image"
import Link from "next/link"

const ChooseSection = () => {
  return (
    <section className="xm:pb-13 flex flex-col items-center justify-center gap-10 pt-20 pb-28 xm:gap-5 sm:pt-10 sm:pb-8">
      <div className="mb-20 flex w-3/5 flex-col  items-center gap-8 text-center  font-semibold text-black dark:text-white sm:mb-12 sm:w-[75%] sm:gap-4">
        <h3 className="w-5/6 text-5xl md:text-2xl">Why choose us</h3>
        <p className="text-[12px]  text-gray-600">
          <span className="block sm:inline">
            Lorem ipsum dolor sit ametconsecteturadipiscing elit.
          </span>
          <span>
            {" "}
            Tincidunt ac eget sceleri Lorem ipsum dolor sit ametconsecteturadipiscing
            elit.
          </span>{" "}
        </p>
      </div>
      <div className="relative flex justify-center ">
        <div className="absolute -top-24 left-0 xm:hidden">
          <Image
            src={arrowBendIcon}
            layout="fixed"
            width={300}
            height={100}
            alt="icon"
          />
        </div>
        <div className="absolute -bottom-28 right-0 xm:hidden">
          <Image
            src={arrowBendIcon2}
            width={300}
            height={100}
            layout="fixed"
            alt="icon"
          />
        </div>
        <div className="flex w-[70%] flex-col gap-10  sm:w-5/6  ">
          <div className="flex gap-5 xm:flex-col xm:gap-8">
            <div className="flex flex-1 items-start justify-start gap-5 dark:text-white ">
              <span className="rounded-md bg-light-purple py-2 px-3 xm:py-1.5 xm:px-2.5 xm:text-sm">
                1
              </span>
              <div className="flex flex-col gap-5 md:gap-2">
                <p className="text-2xl md:text-xl">Your Code is secure</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consecteturadipiscing elit. Tincidunt ac
                  eget sit sceleri Tincidunt ac eget sit sceleri
                </p>
                <Link href="/">learn more &rarr;</Link>
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start  gap-5 dark:text-white">
              <span className="rounded-md bg-deep-green py-2 px-3 xm:py-1.5 xm:px-2.5 xm:text-sm">
                2
              </span>
              <div className="flex flex-col gap-5 md:gap-2">
                <p className="text-2xl md:text-xl">We are Fast</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consecteturadipiscing elit. Tincidunt ac
                  eget sit sceleri Tincidunt ac eget sit sceleri
                </p>
                <Link href="/">learn more &rarr;</Link>
              </div>
            </div>
          </div>
          <div className="flex gap-5  xm:flex-col xm:gap-8">
            <div className="flex flex-1 items-start justify-start gap-5 dark:text-white">
              <span className="rounded-md bg-blue py-2 px-3 xm:py-1.5 xm:px-2.5 xm:text-sm">
                3
              </span>
              <div className="flex flex-col gap-5 md:gap-2">
                <p className="text-2xl md:text-xl">Your Code is secure</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consecteturadipiscing elit. Tincidunt ac
                  eget sit sceleri Tincidunt ac eget sit sceleri
                </p>
                <Link href="/">learn more &rarr;</Link>
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start gap-5 dark:text-white">
              <span className="rounded-md bg-deep-wine py-2 px-3 xm:py-1.5 xm:px-2.5 xm:text-sm">
                4
              </span>
              <div className="flex flex-col gap-5 md:gap-2">
                <p className="text-2xl md:text-xl">Your Code is secure</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consecteturadipiscing elit. Tincidunt ac
                  eget sit sceleri Tincidunt ac eget sit sceleri
                </p>
                <Link href="/">learn more &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseSection
