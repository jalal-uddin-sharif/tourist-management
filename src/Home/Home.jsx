
import CountryCate from "../component/CountryCate";
import TouristsSpot from "../component/TouristsSpot";
import Slider from "../component/Slider";
import Traveltips from "../component/Traveltips";
import Testimonial from "../component/Testimonial";

const Home = () => {
    return (
        <div className="min-h lg:px-0 md:px-0 px-4">
            <Slider/>
            <CountryCate/>
            <TouristsSpot/>
            <Traveltips/>
            <Testimonial/>

        </div>
    );
};

export default Home;