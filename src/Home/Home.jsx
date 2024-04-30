
import CountryCate from "../component/CountryCate";
import TouristsSpot from "../component/TouristsSpot";
import Slider from "../component/Slider";

const Home = () => {
    return (
        <div className="min-h">
            <Slider/>
            <CountryCate/>
            <TouristsSpot/>

        </div>
    );
};

export default Home;