import Image from "next/image"
import underlay from "../../assets/underlay.svg"
import ThemeButton from "../ThemeButton"

const Header = () => {
  return (
    <div className="relative flex min-h-[80vh] justify-center">
      <Image
        className="absolute top-[50%] left-[50%]  z-10 m-auto w-72 
           sm:translate-y-[10%] "
        src={underlay}
        layout="fill"
        alt="underlay"
      />

      <div className="sm z-30 flex flex-col items-center justify-center gap-8 sm:gap-5">
        <div className="z-20 flex flex-col items-center justify-center gap-3 text-5xl font-bold text-black dark:text-white md:text-3xl sm:gap-1 sm:text-xl">
          <h1>Speed up your</h1>
          <h1 className="flex items-center  gap-7 md:gap-5 sm:gap-3">
            <span>{"</"}</span>workflow with faster <span>{">"}</span>
          </h1>
          <h1>access to your code</h1>
        </div>
        <p className="text-center text-[12px] text-gray-400 sm:w-5/6">
          A new developer’s platform to build, scale, share, save and secure snippet
          code
        </p>
        <button className="cursor-pointer rounded-md bg-button-black py-2 px-6 text-white dark:bg-white dark:text-black sm:px-4 sm:py-1.5 sm:text-sm">
          Get started
        </button>
      </div>
      <div className="absolute bottom-0 right-11 z-30 md:hidden">
        <ThemeButton />
      </div>
    </div>
  )
}

export default Header
