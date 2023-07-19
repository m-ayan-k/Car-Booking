import Image from "next/image"
import Link from "next/link"
import CustomButton from "./custombutton"
export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
        <nav className=" max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain"/>
            </Link>
            <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles="bg-primary-blue text-white xl:text-primary-blue xl:bg-white rounded-full min-w-[130px]"
            />
        </nav>
    </header>
  )
}
