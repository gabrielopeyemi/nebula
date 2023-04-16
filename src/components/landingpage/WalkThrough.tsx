import downArrow from "../../assets/arrow-down.svg"
import Image from "next/image"
import crownIcon1 from "../../assets/Sketch-1.svg"
import crownIcon2 from "../../assets/Sketch-2.svg"
import crownIcon3 from "../../assets/Sketch-3.svg"
import laptop from "../../assets/laptop.png"
import line1 from "../../assets/line-1.svg"
import line2 from "../../assets/line-2.svg"

const WalkThrough = () => {
  return (
    <section className="flex  flex-col items-center justify-center gap-10 py-20">
      <div className="mb-20 flex w-3/5 flex-col items-center gap-8 text-center font-semibold text-black dark:text-white md:gap-3 sm:mb-10 sm:w-[70%] sm:gap-4">
        <Image className="" layout="fixed" src={downArrow} alt="code-snippet" />
        <h3 className="w-5/6 text-5xl md:text-2xl ">The way Asian code works</h3>
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
      <div className="flex w-5/6 flex-col items-center justify-center xm:gap-20">
        <div className="flex items-center gap-20 md:gap-10 xm:flex-col">
          <div className="relative flex flex-col">
            <div className="absolute -top-16 -left-20 ">
              <Image
                src={crownIcon1}
                alt=""
                layout="fixed"
                width={100}
                height={100}
                className=""
              />
            </div>
            <h3 className="text3xl font-bold dark:text-white md:text-xl">
              Store snippet code
            </h3>
            <p className="text-[12px] text-gray-600">
              <span className="block">Lorem ipsum dolor sit amet</span>
              <span className="block"> consecteturadipiscing elit.</span>
              <span> Tincidunt ac eget sit sceleri</span>
            </p>
          </div>
          <div className="relative h-[300px] w-[500px] md:h-[200px]   md:w-[300px] xs:h-[170px] xs:w-[230px]">
            <Image
              src={laptop}
              alt=""
              objectFit="cover"
              layout="fill"
              className=" rounded-md"
            />
          </div>
        </div>
        <div className="xm:hidden">
          <Image
            src={line1}
            alt=""
            layout="fixed"
            width={400}
            height={100}
            className="xm:hidden"
          />
        </div>
        <div className="flex flex-row-reverse items-center gap-20 md:gap-10  xm:flex-col">
          <div className="relative flex flex-col ">
            <div className="absolute -top-16 -right-14 ">
              <Image
                src={crownIcon2}
                alt=""
                layout="fixed"
                width={80}
                height={100}
                className=""
              />
            </div>
            <h3 className="text3xl  font-bold dark:text-white md:text-xl">
              Share snippet code
            </h3>
            <p className="text-[12px] text-gray-600">
              <span className="block">Lorem ipsum dolor sit amet</span>
              <span className="block"> consecteturadipiscing elit.</span>
              <span> Tincidunt ac eget sit sceleri</span>
            </p>
          </div>
          <div className="relative h-[300px] w-[500px] md:h-[200px]   md:w-[300px]  xs:h-[170px] xs:w-[230px]">
            <Image
              src={laptop}
              alt=""
              objectFit="cover"
              layout="fill"
              className=" rounded-md"
            />
          </div>
        </div>
        <div className="xm:hidden">
          <Image src={line2} alt="" layout="fixed" width={400} height={100} />
        </div>
        <div className="flex items-center gap-20 md:gap-10 xm:flex-col">
          <div className="relative flex flex-col">
            <div className="absolute -top-16 -left-20 ">
              <Image
                src={crownIcon3}
                alt=""
                layout="fixed"
                width={100}
                height={100}
                className=""
              />
            </div>
            <h3 className="text3xl font-bold dark:text-white">Reuse snippet code</h3>
            <p className="text-[12px] text-gray-600">
              <span className="block">Lorem ipsum dolor sit amet</span>
              <span className="block"> consecteturadipiscing elit.</span>
              <span> Tincidunt ac eget sit sceleri</span>
            </p>
          </div>
          <div className="relative h-[300px] w-[500px] md:h-[200px]   md:w-[300px]  xs:h-[170px] xs:w-[230px]">
            <Image
              className="rounded-md"
              src={laptop}
              alt=""
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalkThrough
