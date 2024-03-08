"use client";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
};

const Tickets = () => {
    return (
        <div className="px-5 sm:px-20 pt-8 mb-4 md:mb-20 -mt-20 md:-mt-32 relative z-20">
            <div className="wrapper flex justify-center">
                <div className="w-full md:max-w-[860px] bg-[#142434] md:box shadow-lg px-3 md:px-6 border border-purple-500 border-opacity-10 rounded-[30px]">
                    <Tab.Group>
                        <Tab.List className="flex justify-center gap-1 md:gap-2">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-[80%] sm:w-full md:w-[35%] lg:w-[25%] py-5 text-[1rem] md:text-lg text-center",
                                        selected && "line2"
                                    )
                                }
                            >
                                Current Tickets
                            </Tab>

                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-[80%] sm:w-full md:w-[35%] lg:w-[25%] py-5 text-[1rem] md:text-lg text-center",
                                        selected && "line2"
                                    )
                                }
                            >
                                My Winnings
                            </Tab>
                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center mb-8"
                                )}
                            >
                                <div className="flex items-center justify-between md:justify-around my-2 md:my-4 px-2 md:px-8">
                                    <div className="flex-1">
                                        <h1 className="text-[.8rem] md:text-[1.1rem]">
                                            Numbers
                                        </h1>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[70px] md:w-[156px]  text-center">
                                        Tickets
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[70px] md:w-[156px] text-center">
                                        Bet Value
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center mb-8"
                                )}
                            >
                                <div className="flex items-center justify-between md:justify-around my-2 md:my-4 px-2 md:px-8">
                                    <div className="flex-1">
                                        <h1 className="text-[.8rem] md:text-[1.1rem]">
                                            Numbers
                                        </h1>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[70px] md:w-[156px]  text-center">
                                        Tickets
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[70px] md:w-[156px] text-center">
                                        Prize
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 my-2 box2 shadow-lg w-full py-1 md:py-2 border border-slate-600 border-opacity-30">
                                    <div className="flex-1">
                                        <div className="flex items-center pl-2 sm:pl-4 md:pl-7 py-1">
                                            <img
                                                className="relative left-[0.05rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/LeftTic.png"}
                                                alt="Tickets"
                                            />

                                            <div className="w-auto h-[28px] md:h-[40px] TicketBg flex justify-center items-center gap-[0.35rem] md:gap-2 px-2 md:px-3">
                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Win rounded-full text-white text-center font-bold ring-[0.8px] ring-white">
                                                    1
                                                </h1>

                                                <h1 className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] text-[13px] sm:text-[14px] md:text-[17px] Ticket rounded-full text-black text-center font-bold">
                                                    1
                                                </h1>
                                            </div>

                                            <img
                                                className="relative right-[0.08rem] w-[.41rem] md:w-[0.56rem]"
                                                src={"/assets/RightTic.png"}
                                                alt="Tickets"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[68px] md:w-[135px]">
                                        x2
                                    </h1>

                                    <h1 className="text-[.8rem] md:text-[1.1rem] w-[45px] md:w-[120px] text-[#8AC986]">
                                        $1
                                    </h1>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
};

export default Tickets;