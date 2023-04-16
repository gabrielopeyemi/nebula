import React from "react"
import codeImage from "../../assets/code.png"
import codeImageDark from "../../assets/code-dark.png"
import downArrow from "../../assets/arrow-down-1.svg"
import { useAppSelector } from "@/store/hook"
import Image from "next/image"

const CodeSnippet = () => {
  const { darkTheme } = useAppSelector((state) => state.theme)

  return (
    <section className="flex  flex-col items-center justify-center gap-5 pt-24">
      <div className="flex w-3/5 flex-col items-center gap-8 text-center font-semibold text-black dark:text-white md:gap-3 sm:w-[70%] ">
        <Image className="" layout="fixed" src={downArrow} alt="code-snippet" />
        <h3 className="text-5xl md:text-2xl ">Github for snippet code</h3>
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
      <div className="relative mt-10 h-[400px] w-[800px] md:h-[250px] md:w-[450px]   sm:mt-5 sm:h-[170px] sm:w-[350px] xs:h-[120px] xs:w-[230px] xs:object-contain">
        <Image
          objectFit="cover"
          layout="fill"
          src={darkTheme ? codeImageDark : codeImage}
          alt="code-snippet"
        />
      </div>
    </section>
  )
}

export default CodeSnippet
