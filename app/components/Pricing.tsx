import Image from "next/image"
import Check from '../../public/assets/check.svg'

const Pricing = () => {
  return (
    <div id="pricing" className='py-12 lg:py-[60px]'>
        <h1 className='text-[#172026] text-2xl text-center font-medium lg:text-[42px]'>Flexible plans for you</h1>
        <p className='pt-4 pb-10 text-center text-[#36485C] lg:text-[18px]'>No hidden fees!</p>

        <div className='flex flex-col gap-y-6 lg:flex-row lg:gap-x-6'>
                <div className='w-full rounded-2 bg-[#F5F4FF] p-6 flex flex-col justify-between'>
                    <div>
                        <h3 className='text-[#4328EB] font-medium text-lg lg:text-xl'>Free Trial</h3>
                        <p className='[#36485C] pt-3 lg:text-lg'>Perfect for testing the waters</p>
                        <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>0$ <span className='text-[#5F7896]'>/mo</span></h2>
                        <ul className='flex flex-col gap-y-2 pt-4'>
                            <li className='flex items-center gap-x-2 text-[#36485C]'>
                                <span><Image src={Check} alt="" /></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2 text-[#36485C]'>
                                <span><Image src={Check} alt="" /></span>
                                Sed do eiusmod tempor incididunt
                            </li>
                            <li className='flex items-center gap-x-2 text-[#36485C]'>
                                <span><Image src={Check} alt="" /></span>
                                Consectetur adipiscing elit
                            </li>
                        </ul>
                    </div>
                    <button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Start Trial</button>
                </div>


                <div className='w-full rounded-2 bg-[#4328EB] p-6 flex flex-col justify-between'>
                    <div>
                        <h3 className='text-white font-medium text-lg lg:text-xl'>Business</h3>
                        <p className='text-[#F4F8FA] pt-3 lg:text-lg'>Perfect for small businesses</p>
                        <h2 className='pt-4 text-2xl font-medium text-white lg:text-[32px]'>500$ <span className='text-[#F4F8FA]'>/mo</span></h2>
                        <ul className='flex flex-col gap-y-2 pt-4 text-[#F4F8FA]'>
                            <li className='flex items-center gap-x-2'>
                                <span><Image src={Check} alt="" /></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span><Image src={Check} alt="" /></span>
                                Sed do eiusmod tempor incididunt
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span><Image src={Check} alt="" /></span>
                                Consectetur adipiscing elit
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span><Image src={Check} alt="" /></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span><Image src={Check} alt="" /></span>
                                Consectetur adipiscing elit
                            </li>
                        </ul>
                    </div>
                    <button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
                </div>


                <div className='w-full rounded-2 bg-[#F5F4FF] p-6 flex flex-col justify-between'>
                    <div>
                        <h3 className='text-[#4328EB] font-medium text-lg lg:text-xl'>Enterprise</h3>
                        <p className='[#36485C] pt-3 lg:text-lg'>Perfect for big companies</p>
                        <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>Custom </h2>
                        <p className="pt-4 text-base text-[#36485C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
                        </p>
                        <p className="pt-4 text-base text-[#36485C]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Contact Us</button>
                </div>
        </div>
    </div>
  )
}

export default Pricing