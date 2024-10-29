import Chart2 from "./Chart2";
import Chart from "./Chart";
import { Link } from "react-router-dom";

export const ChartInfo = () => {
    return (
        <div className="relative z-10 flex flex-col h-screen text-start text-gray-300 font-demibold justify-center items-center p-4">
            <div className="font-semibold text-3xl md:text-4xl mb-4">Charts</div>
            <Link to="/chart" className="block font hover:text-gray-400 mb-4 text-xl md:text-3xl transition duration-300">
                Asteroids Detected in the Last 7 Days
            </Link>
            <Link to="/chart2" className="block hover:text-gray-400 mb-4 text-xl md:text-3xl transition duration-300">
                Asteroid Size Distribution
            </Link>
        </div>
    );
};
