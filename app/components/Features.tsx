import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import BlueButton from '../../public/assets/blue-button.svg'
import GreenButton from '../../public/assets/green-button.svg'
import PinkButton from '../../public/assets/pink-button.svg';
import Image from 'next/image'


const Features = () => {
  return (
    <div id="features" className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
              <Image src={Feature1} alt="" className='hidden w-1/2 sm:block' />
                  <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="text-[#172026] font-medium leading-12 text-2xl pt-[12px] lg:text-[42px] lg:leading-[58px]">Simplify your sales monitoring</h1>
                    <Image src={Feature1} alt="featured1" className='pt-6 sm:hidden'/>
                    <p className='text-[#36485C] py-6 lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. 
                      Get a bird's eye view with our customizable dashboard. </p>
                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                      <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span><Image src={Check} alt="" /></span>
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span><Image src={Check} alt="" /></span>
                        Consectetur adipiscing elit
                      </li>
                      <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span><Image src={Check} alt="" /></span>
                        Sed do eiusmod tempor incididunt ut labore 
                      </li>
                    </ul>
                    <p className='flex items-center gap-x-2 pt-6 text-[#0085FF] font-medium lg:text-[18px]'>Learn More <span><Image src={BlueButton} alt="" /></span></p>
                  </div>
        </div>


        <div className="flex flex-col gap-x-6 sm:flex-row">
              <Image src={Feature2} alt="" className='hidden w-1/2 sm:block' />
                  <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">Customer Support</h3>
                    <h1 className="text-[#172026] font-medium leading-12 text-2xl pt-[12px] lg:text-[42px] lg:leading-[58px]">Get in touch with your customers</h1>
                    <Image src={Feature2} alt="featured1" className='pt-6 sm:hidden'/>
                    <p className='text-[#36485C] py-6 lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. 
                      Get a bird's eye view with our customizable dashboard. </p>
                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                      <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span><Image src={Check} alt="" /></span>
                        Lorem ipsum dolor sit amet
                      </li>
                      <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span><Image src={Check} alt="" /></span>
                        Consectetur adipiscing elit
                      </li>
                      <li className='flex items-center gap-x-2 text-[#36485C]'>
                        <span><Image src={Check} alt="" /></span>
                        Sed do eiusmod tempor incididunt ut labore 
                      </li>
                    </ul>
                    <p className='flex items-center gap-x-2 pt-6 text-[#00A424] font-medium lg:text-[18px]'>Learn More <span><Image src={GreenButton} alt="" /></span></p>
                  </div>
        </div>

        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
              <Image src={Feature3} alt="" className='hidden w-1/2 sm:block' />
                  <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="text-[#172026] font-medium leading-12 text-2xl pt-[12px] lg:text-[42px] lg:leading-[58px]">Monitor your site’s new subscribers </h1>
                    <Image src={Feature3} alt="featured1" className='pt-6 sm:hidden'/>
                    <p className='text-[#36485C] py-6 lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. 
                      Get a bird's eye view with our customizable dashboard. </p>
                    
                    <div className='flex w-full gap-x-6 pt-6'>
                        <div className='w-1/2 flex-col gap-y-3'>
                          <h3 className='text-[20px] font-medium text-[#172026]'>100+</h3>
                          <p className='text-[#5F7896]'>Lorem ipsum dolor sit</p>
                        </div>

                        <div className='w-1/2 flex-col gap-y-3'>
                          <h3 className='text-[20px] font-medium text-[#172026]'>800+</h3>
                          <p className='text-[#5F7896]'>Conse adipiscing elit</p>
                        </div>

                    </div>
                    <p className='flex items-center gap-x-2 pt-6 text-[#EB2891] font-medium lg:text-[18px]'>Learn More <span><Image src={PinkButton} alt="" /></span></p>
                  </div>
        </div>



    </div>
  )
}

export default Features