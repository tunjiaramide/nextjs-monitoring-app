import Image from "next/image"
import Logo from '../../public/assets/Logo.svg';
import UserProfile from '../../public/assets/User.svg';
import MenuButton from '../../public/assets/Menu.svg';
import Link from "next/link";


function NavBar() {

    const navLinks = [
        { name: 'Features', href: 'features'},
        { name: 'Pricing', href: 'pricing'},
        { name: 'Faq', href: 'faq'},
        { name: 'Careers', href: 'careers'},
    ];


  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
            <div className="flex items-center">
                <Image src={Logo} alt="logo"/>
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                        {navLinks.map((item, index) => (
                            <p key={index} className="font-medium text-[#36485C]"><Link href={`#${item.href}`}>{item.name}</Link></p>
                        ))}
                </div>
            </div>
            <div className="flex gap-x-5 items-center">
                <p className="hidden lg:block text-[#36485C] font-medium pr-[56px]">Open an account</p>
                <div className="flex items-center gap-x-2">
                    <Image src={UserProfile} alt="User Profile" />
                    <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
                </div>
                <Image src={MenuButton} alt="Menu Button" className="lg:hidden" />
            </div>
    </nav>
  )
}

export default NavBar