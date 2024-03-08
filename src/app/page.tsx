import Condition from "@/Components/Condition";
import Prizes from "@/Components/Prizes";
import Tickets from "@/Components/Tickets";
import Timer from "@/Components/Timer";

const Home = () => {
    return (
        <>
            <Timer />
            <Tickets />
            <Prizes />
            <Condition />
        </>
    )
}

export default Home;