"use client";
import { Tab } from "@headlessui/react";
import { CONDITIONS } from "@/static";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
};

const Condition = () => {
    return (
        <div className="px-5 sm:px-20 py-4 md:py-8 mb-2 md:mb-4 mt-2 md:mt-0">
            <div className="wrapper flex justify-center">
                <div className="hidden lg:block w-full md:max-w-[860px] box shadow-lg px-16 border border-purple-500 border-opacity-10 rounded-[30px]">
                    <Tab.Group>
                        <Tab.List className="flex gap-2">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-full py-5 text-lg text-center",
                                        selected && "line1"
                                    )
                                }
                            >
                                How to play?
                            </Tab>

                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-full py-5 text-lg text-center",
                                        selected && "line1"
                                    )
                                }
                            >
                                Provably Fair
                            </Tab>

                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-full py-5 text-lg text-center",
                                        selected && "line1"
                                    )
                                }
                            >
                                Lottery Instruction
                            </Tab>
                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center items-center gap-6 mt-8 px-1 mb-6"
                                )}
                            >
                                <h1 className="text-[1.9rem] text-center">
                                    {`It’s as simple as something here`}
                                </h1>

                                <p className="text-[0.9rem] max-w-lg text-center leading-7 md:leading-5">
                                    Lorem ipsum dolor sit amet consectetur. In vulputate sit vestibulum hendrerit dis libero placerat.
                                </p>

                                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10 my-4">
                                    {CONDITIONS.map((item, i: number) => (
                                        <div
                                            className="mt-4 md:mt-8"
                                            key={i}
                                        >
                                            <div className="flex flex-col justify-center items-center gap-4 w-56">
                                                <h1 className="text-3xl text-center numShadow">
                                                    {item.id}
                                                </h1>

                                                <h3 className="text-sm text-center">
                                                    {item.title}
                                                </h3>

                                                <p className="text-xs text-center">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center items-center gap-8 mt-8 mb-6"
                                )}
                            >
                                <h1 className="text-2xl text-center">
                                    Provably Fair
                                </h1>

                                <p className="text-[0.75rem] text-center mb-4">
                                    Lottery uses a 5+1 ball draw: 5 from 49, 1 from 18. Server seed changes each game, shown after Hash256. Client seed is the Ethereum block height after ticket sales, hashed 10 blocks later. The winning numbers are found by hashing client and server seeds with HMAC_SHA256, then converting part of this hash into a number to pick the balls.
                                </p>
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center items-center gap-8 mt-8 mb-6"
                                )}
                            >
                                <h1 className="text-2xl text-center">
                                    Lottery Instruction
                                </h1>

                                <p className="text-[0.75rem] text-center mb-4">
                                    A provably fair algorithm is used to draw the lottery prizes. Prizes are drawn at 03:00 UTC+0 every day. You can buy a ticket for $2. The sale of tickets stops at 02:55 UTC+0 every day.
                                    The player chooses six numbers for each ticket, the first five are from 1 to 49, and the last one is from 1 to 18.
                                    You can choose numbers manually or automatically.
                                    Order of the six numbers does not matter.
                                </p>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

                <div className="block lg:hidden w-full md:max-w-[860px] bg-[#142434] md:box shadow-lg px-8 md:px-20 border-2 border-slate-800 md:border md:border-purple-500 md:border-opacity-10 rounded-[30px]">
                    <Tab.Group>
                        <Tab.List className="flex justify-center md:gap-2">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-full py-5 px-3 text-[1rem] md:text-lg text-center",
                                        selected && "line1"
                                    )
                                }
                            >
                                How to play?
                            </Tab>

                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "w-full py-5 px-3 text-[1rem] md:text-lg text-center",
                                        selected && "line1"
                                    )
                                }
                            >
                                Provably Fair
                            </Tab>
                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center items-center gap-6 mt-8 px-1 mb-6"
                                )}
                            >
                                <h1 className="text-2xl text-center">
                                    {`It’s as simple as something here`}
                                </h1>

                                <p className="text-[0.75rem] max-w-md text-center md:leading-5">
                                    Lorem ipsum dolor sit amet consectetur. In vulputate sit vestibulum hendrerit dis libero placerat.
                                </p>

                                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10 my-4">
                                    {CONDITIONS.map((item, i: number) => (
                                        <div
                                            className="mt-3 md:mt-8"
                                            key={i}
                                        >
                                            <div className="flex flex-col justify-center items-center gap-4 w-56">
                                                <h1 className="text-3xl text-center numShadow">
                                                    {item.id}
                                                </h1>

                                                <h3 className="text-sm text-center">
                                                    {item.title}
                                                </h3>

                                                <p className="text-xs text-center">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center items-center gap-8 mt-8 mb-6"
                                )}
                            >
                                <h1 className="text-2xl text-center">
                                    Provably Fair
                                </h1>

                                <p className="text-[0.75rem] text-center mb-4">
                                    Lottery uses a 5+1 ball draw: 5 from 49, 1 from 18. Server seed changes each game, shown after Hash256. Client seed is the Ethereum block height after ticket sales, hashed 10 blocks later. The winning numbers are found by hashing client and server seeds with HMAC_SHA256, then converting part of this hash into a number to pick the balls.
                                </p>
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    "flex flex-col justify-center items-center gap-8 mt-8 mb-6"
                                )}
                            >
                                <h1 className="text-2xl text-center">
                                    Lottery Instruction
                                </h1>

                                <p className="text-[0.75rem] text-center mb-4">
                                    A provably fair algorithm is used to draw the lottery prizes. Prizes are drawn at 03:00 UTC+0 every day. You can buy a ticket for $2. The sale of tickets stops at 02:55 UTC+0 every day.
                                    The player chooses six numbers for each ticket, the first five are from 1 to 49, and the last one is from 1 to 18.
                                    You can choose numbers manually or automatically.
                                    Order of the six numbers does not matter.
                                </p>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
};

export default Condition;