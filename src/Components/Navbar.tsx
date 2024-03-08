import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import { Command, CommandInput } from "@/Components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Checkbox } from "@/Components/ui/checkbox";
import { myFontBold } from "@/static/font";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="md:bg-[#3a365a] py-3 z-60 md:bg-opacity-20 md:backdrop-blur-lg md:border-opacity-20">
            <div className="wrapper">
                <div className="flex justify-between items-center">
                    <img
                        className="w-8 h-8 mx-4 md:ml-14 md:mr-28"
                        src={"soloto.svg"}
                        alt="Soloto Logo"
                    />

                    <div className="flex items-center justify-center gap-3 z-100">

                        {/* ============= Search Coins ============= */}

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 md:gap-2 bg-slate-500 px-2 py-1 rounded-2xl bg-opacity-20 shadow backdrop-blur-lg">
                                <img
                                    className="w-30 h-30 md:w-30 md:h-30 mr-1 md:mr-0"
                                    src={"solanapre.svg"}
                                    alt="solana Logo"
                                />

                                <h1 className="text-sm md:text-md font-medium">
                                    0.000SOL
                                </h1>

                                <ChevronDown className="ml-2 md:ml-6 w-4" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                className="ml-16 md:ml-0 md:mx-0 mt-4 md:mt-2 max-w-[240px] rounded-2xl p-3 md:p-4 bg-opacity-20 shadow backdrop-blur-lg"
                                style={{
                                    background: "linear-gradient(205.66deg, rgba(21, 6, 55, 0.6) 5.45%, rgba(43, 18, 96, 0.6) 97.2%)",
                                    border: "1.61144px solid rgba(255, 255, 255, 0.07)",
                                    borderRadius: "12.8915px"
                                }}
                            >
                                <Command className="bg-slate-600 rounded-2xl bg-opacity-20 backdrop-blur-lg border-[none]">
                                    <CommandInput css="h-6 w-6" placeholder="Search Coins" />
                                </Command>

                                <DropdownMenuLabel className="flex flex-col gap-5 py-4 md:py-5">
                                    <div className="flex gap-2 items-center">
                                        <Checkbox />

                                        <span className="text-xs font-normal">
                                            Display USD Value
                                        </span>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Checkbox />

                                        <span className="text-xs font-normal">
                                            Hide Small Balances
                                        </span>
                                    </div>
                                </DropdownMenuLabel>

                                <hr
                                    style={{
                                        border: "0.602144px solid #FFFFFF",
                                        opacity: 0.1
                                    }}
                                />

                                <div className="flex items-center gap-3 py-2 md:py-3">
                                    <Image
                                        src={"solana.svg"}
                                        alt="solana Logo"
                                        width={28}
                                        height={28}
                                    />

                                    <h1 className="font-medium text-[0.8rem] md:text-[.9rem]">
                                        0.000 SOL
                                    </h1>
                                </div>

                                <hr
                                    style={{
                                        border: "0.602144px solid #FFFFFF",
                                        opacity: 0.1
                                    }}
                                />

                                <div className="flex items-center gap-3 py-2 md:py-3">
                                    <Image
                                        src={"usdt.svg"}
                                        alt="usdt Logo"
                                        width={28}
                                        height={28}
                                    />

                                    <h1 className="font-medium text-[0.8rem] md:text-[.9rem]">
                                        0.000 USDT
                                    </h1>
                                </div>

                                <hr
                                    style={{
                                        border: "0.602144px solid #FFFFFF",
                                        opacity: 0.1
                                    }}
                                />

                                <div className="flex items-center gap-3 py-2 md:py-3">
                                    <Image
                                        src={"usdc.svg"}
                                        alt="usdc Logo"
                                        width={28}
                                        height={28}
                                    />

                                    <h1 className="font-medium text-[0.8rem] md:text-[.9rem]">
                                        0.000 USDC
                                    </h1>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* ============= Wallet ============= */}

                        <Dialog>
                            <DialogTrigger>
                                <Button
                                    className={`font-semibold text-xs px-5 pt-2 hidden md:block bg-[#63499D] hover:bg-[#4d3386] text-white rounded-xl tracking-widest border-b-[3px] border-[#796B98]`}
                                >
                                    DEPOSIT
                                </Button>

                                <Button
                                    className={`font-semibold text-xs px-3 pt-[0.4rem] block md:hidden bg-[#63499D] hover:bg-[#4d3386] text-white rounded-2xl tracking-widest border-b-[3px] border-[#796B98]`}
                                >
                                    <Image
                                        src={"upload.svg"}
                                        alt="upload Logo"
                                        width={18}
                                        height={18}
                                    />
                                </Button>
                            </DialogTrigger>

                            <DialogContent
                                className="px-3 !box shadow-lg backdrop-blur-lg"
                                style={{
                                    border: "3px solid rgba(255, 255, 255, 0.07)",
                                    borderRadius: "40px"
                                }}
                                closeClass="pr-4 pt-3"
                                close="w-6 md:w-8 h-6 md:h-8"
                                hide="hidden"
                            >
                                <DialogHeader className="px-2 py-2">
                                    <DialogTitle className="text-[24px] md:pl-2 md:text-[29.9034px] !font-normal text-left">Wallet</DialogTitle>

                                    <DialogDescription className="hidden md:flex gap-3 items-center py-2 pl-2">
                                        <div className="flex items-center gap-2 modalOption px-[0.6rem] py-[.3rem]">
                                            <img src="/assets/search.png" alt="search" />

                                            <span className="text-[10.5714px] text-white tracking-wider">Find Missing Deposit</span>
                                        </div>

                                        <div className="flex items-center gap-2 modalOption px-[0.6rem] py-[.3rem]">
                                            <img src="/assets/wallet.png" alt="wallet" />

                                            <span className="text-[10.5714px] text-white tracking-wider">Deposit Withdraw History</span>
                                        </div>
                                    </DialogDescription>

                                    <DialogDescription className="flex justify-between gap-2 py-1 px-2">
                                        <div className="w-[150px] sm:w-auto md:w-[205px]">
                                            <Command style={{
                                                background: "rgba(255, 255, 255, 0.05)",
                                                borderRadius: "15px"
                                            }}>
                                                <CommandInput className="h-9 md:h-10" css="h-6 w-6" placeholder="Search Coins" />
                                            </Command>
                                        </div>

                                        <div className="flex items-center gap-2 pr-2">
                                            <img src="/assets/hide.png" alt="hide" />

                                            <span className="text-[10.5714px] text-white tracking-wider">Hide Low Balances</span>
                                        </div>
                                    </DialogDescription>

                                    <DialogDescription className="flex items-center justify-between md:justify-start gap-4 py-2 px-4">
                                        <h1 className="text-[0.95rem] tracking-wide md:w-[130px] lg:w-[145px]">
                                            Coin
                                        </h1>

                                        <h1 className="text-[0.95rem] tracking-wide md:w-[130px] lg:w-[145px]">
                                            My Wallet
                                        </h1>

                                        <h1 className="text-[0.95rem] tracking-wide md:w-[130px] lg:w-[145px]">
                                            $USD
                                        </h1>

                                        <h1 className="text-[0.95rem] tracking-wide hidden md:block flex-1 text-right">
                                            Action
                                        </h1>
                                    </DialogDescription>

                                    <DialogDescription className="flex items-center justify-between md:justify-start gap-4 py-2 px-4">
                                        <div className="flex items-center gap-2 w-[36px] md:w-[130px] lg:w-[145px]">
                                            <Image
                                                src={"solana.svg"}
                                                alt="solana Logo"
                                                width={30}
                                                height={30}
                                            />

                                            <h1 className="text-sm md:text-[1rem] tracking-wide text-white">
                                                SOL
                                            </h1>
                                        </div>

                                        <h1 className="text-sm md:text-[1rem] tracking-wide text-white md:w-[130px] lg:w-[145px]">
                                            0.000 SOL
                                        </h1>

                                        <h1 className="text-sm md:text-[1rem] tracking-wide text-white md:w-[130px] lg:w-[145px]">
                                            $0.00
                                        </h1>

                                        <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
                                            <Button className="font-bold text-[0.8rem] px-6 py-[1.2rem] bg-[#2D71B4] hover:bg-[#1d7bd3] text-white rounded-2xl tracking-widest border-b-4 border-[#175594]">
                                                WITHDRAW
                                            </Button>

                                            {/* ============= Deposit ============= */}

                                            <Dialog>
                                                <DialogTrigger>
                                                    <Button className="font-bold text-[0.8rem] px-6 py-[1.2rem] bg-[#63499D] hover:bg-[#4d3386] text-white rounded-2xl tracking-widest border-b-4 border-[#796B98]">
                                                        DEPOSIT
                                                    </Button>
                                                </DialogTrigger>

                                                <DialogContent
                                                    className="w-[1090px] px-3 !box shadow-lg backdrop-blur-lg"
                                                    style={{
                                                        border: "3px solid rgba(255, 255, 255, 0.07)",
                                                        borderRadius: "40px"
                                                    }}
                                                    closeClass="pr-4 pt-3"
                                                    close="w-8 h-8"
                                                    hide="hidden"
                                                >
                                                    <DialogHeader className="px-2 py-2">
                                                        <DialogTitle className="text-[24px] md:pl-2 !font-normal text-left">
                                                            Deposit
                                                        </DialogTitle>
                                                    </DialogHeader>

                                                    <DialogDescription className="px-2">
                                                        <div className="flex justify-between gap-2 py-2 px-2">
                                                            <h1 className="text-[16px] text-white">
                                                                Select Coin
                                                            </h1>

                                                            <div className="flex gap-3">
                                                                <h1 className="text-[16px]">
                                                                    Total Balance: {""}
                                                                </h1>

                                                                <h1 className="text-white text-[16px]">
                                                                    144.35 USD
                                                                </h1>
                                                            </div>
                                                        </div>

                                                        <div className="modalOption flex justify-between items-center px-2 mx-1 mt-6 mb-3">
                                                            <div className="flex gap-2 items-center px-2 py-3 my-1">
                                                                <Image
                                                                    src={"solana.svg"}
                                                                    alt="solana Logo"
                                                                    width={23}
                                                                    height={23}
                                                                />

                                                                <h1 className="text-white text-[16px]">
                                                                    SOL
                                                                </h1>

                                                                <h1 className="text-[16px]">
                                                                    (0.581) SOL
                                                                </h1>
                                                            </div>

                                                            {/* ============= Select Coin In Deposit Modal ============= */}

                                                            <Dialog>
                                                                <DialogTrigger>
                                                                    <ChevronDown className="text-white w-7 pr-2 cursor-pointer" />
                                                                </DialogTrigger>

                                                                <DialogContent
                                                                    className="px-3 !box shadow-lg backdrop-blur-lg"
                                                                    style={{
                                                                        border: "3px solid rgba(255, 255, 255, 0.07)",
                                                                        borderRadius: "40px"
                                                                    }}
                                                                    closeClass="pr-4 pt-5"
                                                                    close="w-6 h-6"
                                                                    hide="w-6 h-6"
                                                                    hideClose="pl-2 pt-6"
                                                                >
                                                                    <DialogHeader className="px-2 py-2">
                                                                        <DialogTitle className="text-[24px] !font-normal text-center">
                                                                            Deposit
                                                                        </DialogTitle>
                                                                    </DialogHeader>

                                                                    <DialogDescription className="px-2">
                                                                        <h1 className="text-[16px] text-white py-2 px-2">
                                                                            Select Coin
                                                                        </h1>

                                                                        <div className="modalOption flex items-center px-2 mx-1 mt-3 mb-2">
                                                                            <div className="flex gap-2 items-center px-2 py-3 my-1">
                                                                                <Image
                                                                                    src={"solana.svg"}
                                                                                    alt="solana Logo"
                                                                                    width={23}
                                                                                    height={23}
                                                                                />

                                                                                <h1 className="text-white text-[16px]">
                                                                                    SOL
                                                                                </h1>
                                                                            </div>
                                                                        </div>

                                                                        <h1 className="text-[16px] text-white py-2 px-2 my-3">
                                                                            Select Coin
                                                                        </h1>

                                                                        <div className="modalOption flex justify-between items-center px-2 mx-1 mt-3 mb-2">
                                                                            <div className="flex gap-2 items-center px-2 py-3 my-1">
                                                                                <Image
                                                                                    src={"solana.svg"}
                                                                                    alt="solana Logo"
                                                                                    width={23}
                                                                                    height={23}
                                                                                />

                                                                                <h1 className="text-white text-[16px]">
                                                                                    SOLANA
                                                                                </h1>
                                                                            </div>

                                                                            <ChevronDown className="text-white w-7 pr-2 cursor-pointer" />
                                                                        </div>

                                                                        <div className="flex gap-2 items-center px-1">
                                                                            <img
                                                                                className="w-4 h-4"
                                                                                src="/assets/caution.png"
                                                                                alt="caution logo"
                                                                            />

                                                                            <p className="text-white">
                                                                                Make sure your Web3 wallet is connected to the right network.
                                                                            </p>
                                                                        </div>

                                                                        <h1 className="text-[16px] text-white py-2 px-2 mt-4 mb-3">
                                                                            Your Current Connected Wallet
                                                                        </h1>

                                                                        <div className="flex flex-col gap-y-3 my-2 px-1">
                                                                            <Command
                                                                                className="p-2"
                                                                                style={{
                                                                                    background: "rgba(255, 255, 255, 0.05)",
                                                                                    borderRadius: "15px"
                                                                                }}
                                                                            >
                                                                                <CommandInput
                                                                                    placeholder="UNPjTrqviazUZqn1rxHmGVx4xduoFMZEnvuMorPEC39"
                                                                                    className="text-[16px]"
                                                                                    css="hidden"
                                                                                />
                                                                            </Command>

                                                                            <div className="flex gap-3 items-center">
                                                                                <Command
                                                                                    className="p-[0.4rem] flex-1"
                                                                                    style={{
                                                                                        background: "rgba(255, 255, 255, 0.05)",
                                                                                        borderRadius: "15px"
                                                                                    }}
                                                                                >
                                                                                    <CommandInput
                                                                                        placeholder="Min. 0"
                                                                                        className="text-[16px]"
                                                                                        css="hidden"
                                                                                    />
                                                                                </Command>

                                                                                <Button
                                                                                    className="px-8 py-7 text-[16px] text-white"
                                                                                    style={{
                                                                                        background: "rgba(255, 255, 255, 0.05)",
                                                                                        borderRadius: "15px"
                                                                                    }}
                                                                                >
                                                                                    MAX
                                                                                </Button>
                                                                            </div>

                                                                            <Button className={`text-[#39174b] text-[0.9rem] mt-5 w-full ${myFontBold.className} px-2 pt-[1.4rem] pb-[1.3rem] bg-[#8AC986] hover:bg-[#65b160] rounded-xl border-b-4 border-[#2b6b26]`}>
                                                                                DEPOSIT
                                                                            </Button>
                                                                        </div>
                                                                    </DialogDescription>
                                                                </DialogContent>
                                                            </Dialog>
                                                        </div>

                                                        <div className="flex items-center gap-3 mx-1">
                                                            <div className="modalOption flex justify-between items-center px-2">
                                                                <div className="flex gap-2 items-center px-2 py-3">
                                                                    <Image
                                                                        src={"usdt.svg"}
                                                                        alt="usdt Logo"
                                                                        width={23}
                                                                        height={23}
                                                                    />

                                                                    <h1 className="text-white text-[14px]">
                                                                        0.0022 SOL
                                                                    </h1>
                                                                </div>
                                                            </div>

                                                            <div className="modalOption flex justify-between items-center px-2">
                                                                <div className="flex gap-2 items-center px-2 py-3">
                                                                    <Image
                                                                        src={"usdc.svg"}
                                                                        alt="usdc Logo"
                                                                        width={23}
                                                                        height={23}
                                                                    />

                                                                    <h1 className="text-white text-[14px]">
                                                                        0.0022 SOL
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h1 className="text-[16px] text-white my-8 px-2">
                                                            Number Of Tickets
                                                        </h1>

                                                        <div className="modalOption flex justify-between items-center px-2 mx-1 mt-6 mb-1">
                                                            <div className="flex gap-2 items-center px-2 py-3 my-1">
                                                                <Image
                                                                    src={"/assets/wallet.png"}
                                                                    alt="wallet Logo"
                                                                    width={23}
                                                                    height={23}
                                                                />

                                                                <h1 className="text-white text-[16px]">
                                                                    Wallet Address
                                                                </h1>
                                                            </div>

                                                            {/* ============= Wallet Address ============= */}

                                                            <Dialog>
                                                                <DialogTrigger>
                                                                    <ChevronRight className="text-white w-7 pr-2 cursor-pointer" />
                                                                </DialogTrigger>

                                                                <DialogContent
                                                                    className="px-3 !box shadow-lg backdrop-blur-lg"
                                                                    style={{
                                                                        border: "3px solid rgba(255, 255, 255, 0.07)",
                                                                        borderRadius: "40px"
                                                                    }}
                                                                    closeClass="pr-4 pt-5"
                                                                    close="w-6 h-6"
                                                                    hide="w-6 h-6"
                                                                    hideClose="pl-2 pt-6"
                                                                >
                                                                    <DialogHeader className="px-2 py-2">
                                                                        <DialogTitle className="text-[24px] !font-normal text-center">
                                                                            Wallet Address
                                                                        </DialogTitle>
                                                                    </DialogHeader>
                                                                </DialogContent>
                                                            </Dialog>
                                                        </div>

                                                        <div className="modalOption flex justify-between items-center px-2 mx-1 my-4">
                                                            <div className="flex gap-2 items-center px-2 py-3 my-1">
                                                                <Image
                                                                    src={"solana.svg"}
                                                                    alt="solana Logo"
                                                                    width={23}
                                                                    height={23}
                                                                />

                                                                <h1 className="text-white text-[16px]">
                                                                    Web3 Wallet
                                                                </h1>
                                                            </div>

                                                            <ChevronRight className="text-white w-7 pr-2 cursor-pointer" />
                                                        </div>
                                                    </DialogDescription>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </DialogDescription>

                                    <DialogDescription className="flex items-center justify-between md:justify-start gap-4 py-2 px-4">
                                        <div className="flex items-center gap-2 w-[36px] md:w-[130px] lg:w-[145px]">
                                            <Image
                                                src={"usdc.svg"}
                                                alt="usdc Logo"
                                                width={30}
                                                height={30}
                                            />

                                            <h1 className="text-sm md:text-[1rem] tracking-wide text-white">
                                                USDC
                                            </h1>
                                        </div>

                                        <h1 className="text-sm md:text-[1rem] tracking-wide text-white md:w-[130px] lg:w-[145px]">
                                            0.000 USDC
                                        </h1>

                                        <h1 className="text-sm md:text-[1rem] tracking-wide text-white md:w-[130px] lg:w-[145px]">
                                            $0.00
                                        </h1>

                                        <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
                                            <Button className="font-bold text-[0.8rem] px-6 py-[1.2rem] bg-[#2D71B4] hover:bg-[#1d7bd3] text-white rounded-2xl tracking-widest border-b-4 border-[#175594]">
                                                WITHDRAW
                                            </Button>

                                            <Button className="font-bold text-[0.8rem] px-6 py-[1.2rem] bg-[#63499D] hover:bg-[#4d3386] text-white rounded-2xl tracking-widest border-b-4 border-[#796B98]">
                                                DEPOSIT
                                            </Button>
                                        </div>
                                    </DialogDescription>

                                    <DialogDescription className="flex items-center justify-between md:justify-start gap-4 py-2 px-4">
                                        <div className="flex items-center gap-2 w-[36px] md:w-[130px] lg:w-[145px]">
                                            <Image
                                                src={"usdt.svg"}
                                                alt="usdt Logo"
                                                width={30}
                                                height={30}
                                            />

                                            <h1 className="text-sm md:text-[1rem] tracking-wide text-white">
                                                USDT
                                            </h1>
                                        </div>

                                        <h1 className="text-sm md:text-[1rem] tracking-wide text-white md:w-[130px] lg:w-[145px]">
                                            0.000 USDT
                                        </h1>

                                        <h1 className="text-sm md:text-[1rem] tracking-wide text-white md:w-[130px] lg:w-[145px]">
                                            $0.00
                                        </h1>

                                        <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
                                            <Button className="font-bold text-[0.8rem] px-6 py-[1.2rem] bg-[#2D71B4] hover:bg-[#1d7bd3] text-white rounded-2xl tracking-widest border-b-4 border-[#175594]">
                                                WITHDRAW
                                            </Button>

                                            <Button className="font-bold text-[0.8rem] px-6 py-[1.2rem] bg-[#63499D] hover:bg-[#4d3386] text-white rounded-2xl tracking-widest border-b-4 border-[#796B98]">
                                                DEPOSIT
                                            </Button>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* ============= SignUp ============= */}

                    {/* <div className="flex items-center justify-center gap-2 md:gap-5 mx-4 md:mr-14 md:ml-4">
                        <Button className={`${myFontBold.className} px-2 py-3 text-xs md:text-sm text-white bg-transparent hover:bg-transparent tracking-wider`}>
                            SIGN UP
                        </Button>

                        <Button className={`${myFontBold.className} px-4 pb-2 pt-3 md:px-6 md:pb-4 md:pt-5 text-xs md:text-sm bg-[#63499D] hover:bg-[#4d3386] text-white rounded-2xl tracking-wider border-b-4 border-[#796B98]`}>
                            CONNECT WALLET
                        </Button>
                    </div> */}

                    <div className="flex items-center mx-4 md:mr-14 md:ml-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 md:gap-3 bg-transparent">
                                <Image
                                    src={"avatar.svg"}
                                    alt="avatar Logo"
                                    width={30}
                                    height={30}
                                />

                                <h1 className="hidden md:block text-sm uppercase font-semibold tracking-wide">
                                    TheZucc126
                                </h1>

                                <ChevronDown className="md:ml-1 w-4" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                className="bg-[#3a365a] md:w-[170px] md:h-[95x] bg-opacity-20 rounded-2xl shadow backdrop-blur-lg"
                                style={{
                                    border: "1.61144px solid rgba(255, 255, 255, 0.07)",
                                    borderRadius: "12.8915px"
                                }}
                            >
                                <Dialog>
                                    <div className="flex gap-3 items-center md:py-3 p-2 md:px-4">
                                        <img
                                            className="w-4 h-4"
                                            src="/assets/wallet.png"
                                            alt="wallet"
                                        />

                                        <span className="text-[0.75rem] md:text-[0.82rem] text-slate-100">Wallet</span>
                                    </div>

                                    <hr
                                        style={{
                                            border: "0.602144px solid #FFFFFF",
                                            opacity: 0.1
                                        }}
                                    />

                                    {/* ============= LogOut ============= */}

                                    <div className="md:py-3 p-2 md:px-4">
                                        <DialogTrigger className="flex gap-3 items-center">
                                            <img
                                                className="w-4 h-4"
                                                src="/assets/logout.png"
                                                alt="logout"
                                            />

                                            <span className="text-[0.75rem] md:text-[0.82rem] text-slate-100">Logout</span>
                                        </DialogTrigger>

                                        <DialogContent
                                            className="w-[350px] md:w-[450px] px-3 !box shadow-lg backdrop-blur-lg"
                                            style={{
                                                border: "2px solid rgba(255, 255, 255, 0.07)",
                                                borderRadius: "30px"
                                            }}
                                            closeClass="pr-3 pt-2"
                                            close="w-7 h-7"
                                            hide="hidden"
                                        >
                                            <DialogHeader className="px-4 pt-3 pb-2">
                                                <DialogDescription>
                                                    <h1 className="!font-normal text-[22px] text-white w-[230px] md:w-[320px] !text-left tracking-wide leading-8">
                                                        Are you sure you want to log out?
                                                    </h1>
                                                </DialogDescription>

                                                <DialogDescription className="py-4">
                                                    <p className="!font-normal text-[0.8rem] text-white w-[210px] md:w-[320px] !text-left tracking-wide">
                                                        You will need to sign in again to access your account.
                                                    </p>
                                                </DialogDescription>

                                                <DialogDescription className="flex justify-end items-center gap-3 pt-3 pb-1">
                                                    <Button className="font-bold shadow-glowBtn text-[0.75rem] px-5 py-[1.1rem] bg-[#C4514A] hover:bg-[#8b342f] text-white rounded-2xl tracking-widest border-b-4 border-[#F5645B]">
                                                        LOG OUT
                                                    </Button>

                                                    <Button className="font-bold shadow-glowBtn text-[0.75rem] px-5 py-[1.1rem] bg-[#63499D] hover:bg-[#4d3386] text-white rounded-2xl tracking-widest border-b-4 border-[#796B98]">
                                                        NEVERMIND
                                                    </Button>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </div>
                                </Dialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;