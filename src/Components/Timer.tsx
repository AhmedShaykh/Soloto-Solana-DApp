import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Button } from "@/Components/ui/button";
import { myFontBold } from "@/static/font";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

const Timer = () => {
    return (
        <div
            className="bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage:
                    "url(/assets/Wings.png)"
            }}
        >
            <div
                className="bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        "url(/assets/Vector.png)"
                }}
            >
                <div className="flex justify-center md:hidden w-full">
                    <img
                        className="absolute md:hidden w-full py-20 z-10"
                        src="/assets/Coin.png"
                        alt="Coins"
                    />
                </div>

                <div className="coins">
                    <div className="px-5 sm:px-20 py-24 md:py-36 wrapper relative z-20">
                        <div className="flex justify-center items-center gap-3 md:gap-5">
                            <div
                                className="flex flex-col items-center shadow-2xl w-[7.2rem] md:w-40 h-[7.4rem] md:h-40 bg-gradient-to-b from-[#67597e] to-opacity-20 via-opacity-10 to-opacity-30 backdrop-blur-xl rounded-3xl border-2 border-[#63499D] border-opacity-30"
                            >
                                <h1 className="text-4xl mt-8 md:mt-10 md:text-6xl text-center font-semibold text-glow">
                                    00
                                </h1>

                                <h4 className="text-xs mt-auto mb-4">
                                    Minutes
                                </h4>
                            </div>

                            <h1 className={`text-3xl md:text-5xl ${myFontBold.className}`}>
                                :
                            </h1>

                            <div
                                className="flex flex-col items-center w-[7.2rem] md:w-40 h-[7.4rem] md:h-40 bg-gradient-to-b from-[#67597e] to-opacity-20 via-opacity-10 to-opacity-30 backdrop-blur-xl rounded-3xl border-2 border-[#63499D] border-opacity-30"
                            >
                                <h1 className="text-4xl mt-8 md:mt-10 md:text-6xl text-center font-semibold text-glow">
                                    00
                                </h1>

                                <h4 className="text-xs mt-auto mb-4">
                                    Seconds
                                </h4>
                            </div>
                        </div>

                        <h3 className="text-center tracking-wide text-xs mt-4 md:mt-6 z-20">
                            Time left until the next draw
                        </h3>

                        <div className="flex justify-center mt-4">
                            {/* <Dialog>
                                <DialogTrigger> */}
                            <Button className={`text-[#39174b] text-sm md:text-[1rem] ${myFontBold.className} shadow-btn px-3 md:px-10 pt-[0.9rem] md:pt-[1.3rem] pb-3 md:pb-5 bg-[#8AC986] hover:bg-[#65b160] rounded-xl border-b-4 border-[#2b6b26]`}>
                                BUY TICKETS
                            </Button>
                            {/* </DialogTrigger> */}

                            {/* <DialogContent
                                    className="w-[1097px] px-3 !box shadow-lg backdrop-blur-lg"
                                    style={{
                                        border: "2px solid rgba(255, 255, 255, 0.07)",
                                        borderRadius: "30px"
                                    }}
                                    closeClass="pr-3 pt-2"
                                    close="w-7 h-7"
                                    hide="hidden"
                                >
                                    <DialogHeader className="px-2 py-2">
                                        <DialogTitle className="text-[24px] md:pl-2 !font-normal text-left">
                                            Buy Lottery Tickets
                                        </DialogTitle>

                                        <DialogDescription>
                                            <Tabs defaultValue="account" className="w-full">
                                                <TabsList className="rounded-2xl">
                                                    <TabsTrigger value="account">
                                                        Automatic
                                                    </TabsTrigger>

                                                    <TabsTrigger value="password">
                                                        Manual
                                                    </TabsTrigger>
                                                </TabsList>

                                                <TabsContent value="account">
                                                    Make changes to your account here.
                                                </TabsContent>

                                                <TabsContent value="password">
                                                    Change your password here.
                                                </TabsContent>
                                            </Tabs>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent> */}
                            {/* </Dialog> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Timer;