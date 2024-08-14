import Logo from '../../public/assets/Logo.svg';
import Image from 'next/image';
import Facebook from '../../public/assets/Facebook.svg'
import Twitter from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'


const Footer = () => {
  return (
    <div className="pt-[80px] pb-[40px]">
        <div className="flex items-center justify-center gap-x-3">
            <Image src={Logo} alt="logo"/>
            <h1 className='font-bold font-[#36485C] text-[17px]'>Montr.io</h1>
        </div>
        <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-7'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Faq</li>
                <li>Careers</li>
        </ul>
        <p className='pt-[56px] text-center text-sm font-medium text-[#5F7896] sm:pt-7'>© Copyright 2024. Your Site. All rights reserved.</p>

        <div className='flex justify-center items-center gap-x-[56px] pt-10'>
                <Image src={Facebook} alt="Facebook" />
                <Image src={Twitter} alt="Twitter" />
                <Image src={Feed} alt="Feed" />
        </div>
    </div>
  )
}

export default Footer