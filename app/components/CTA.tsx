import Image from "next/image"
import Arrow from '../../public/assets/arrow.png';

const CTA = () => {
  return (
    <div className='w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-8 text-center
    lg:my-[60px] lg:px-[324px] lg:py-[89px]'>
            <h1 className="text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px] ">Monitor your website like a pro</h1>
            <p className="pt-6 text-white lg:pt-12 lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency!</p>
            <div className="mt-10 flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center lg:gap-x-10">
                <button className="py-4 px-8 bg-white rounded-[4px] text-pink-500 w-fit font-medium">Try for free</button>
                <button className="w-full text-white flex justify-center gap-x-3 pt-8 font-medium lg:w-fit lg:pt-0">Contact Sales 
                    <span>
                        <Image src={Arrow} alt="" />
                    </span>
                </button>
            </div>
    </div>
  )
}

export default CTA