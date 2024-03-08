import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="px-5 md:px-20 py-12 md:mx-8">
                <div className="flex flex-row items-center justify-between gap-8 my-2">
                    <div className="flex items-center gap-6">
                        <Image
                            src={"soloto.svg"}
                            alt="Soloto Logo"
                            width={25}
                            height={25}
                        />

                        <h3 className="text-xl">
                            Soloto
                        </h3>
                    </div>

                    <div className="flex-row gap-6 items-center lg:gap-10 hidden lg:flex">
                        <h4 className="text-sm md:text-md">
                            info@soloto.io
                        </h4>

                        <h4 className="text-sm md:text-md">
                            Privacy Policy
                        </h4>

                        <h4 className="text-sm md:text-md">
                            Terms & Conditions
                        </h4>
                    </div>

                    <div className="flex items-center lg:pl-12">
                        <Image
                            src={"x.svg"}
                            alt="X Logo"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>

                <div className="flex-row gap-4 items-center justify-between flex lg:hidden mt-8 mb-1">
                    <h4 className="text-xs">
                        info@soloto.io
                    </h4>

                    <h4 className="text-xs">
                        Privacy Policy
                    </h4>

                    <h4 className="text-xs">
                        Terms & Conditions
                    </h4>
                </div>

                <hr className="border-slate-600 my-6" />

                <div className="my-3">
                    <p className="text-[0.6rem] leading-5 md:leading-4 text-center text-white text-opacity-70 md:px-10">
                        Soloto is operated by XYZ Entertainment B.V., a company registered and established under the laws of Curacao. XYZ Entertainment B.V. is licensed and regulated by Antillephone N.V. (license no. 8048/JAZ2020-013). Its registration number is 157447, with a registered address at Korporaalweg 10, Willemstad, Curaçao. Crypto trading is not considered gambling and is not included under our gaming license.
                    </p>
                </div>

                <hr className="border-slate-600 my-6" />

                <div className="my-1 flex flex-col lg:flex-row gap-5 justify-between items-center">
                    <p className="text-center text-xs md:text-md text-white text-opacity-70">
                        Copyright © 2024 soloto.io - All rights reserved.
                    </p>

                    <p className="text-center text-xs md:text-md text-white text-opacity-70">
                        Powered By: {""}

                        <Link
                            href={"http://www.brdigitech.com/"}
                        >
                            Button R Digitech (bRd)
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer;