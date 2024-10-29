import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const API_KEY = "t1rUcuMxVhZLcgENCYLCzICMV9m5NXKOMQUfCBn2";

const ChartAsteroids = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchAsteroidData = async () => {
      const today = new Date().toISOString().split('T')[0];
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7); // Get data for the last 7 days
      const formattedStartDate = startDate.toISOString().split('T')[0];

      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedStartDate}&end_date=${today}&api_key=${API_KEY}`
      );
      const data = await response.json();

      const labels = [];
      const asteroidCounts = [];

      Object.keys(data.near_earth_objects).forEach((date) => {
        labels.push(date);
        asteroidCounts.push(data.near_earth_objects[date].length);
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'Asteroids Detected',
            data: asteroidCounts,
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchAsteroidData();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='relative z-10 flex flex-col md:flex-row justify-center items-center h-screen bg-gray-400 bg-opacity-30 p-6'>
      <div className='w-full md:w-1/2 mb-4 md:mb-0 md:mx-4 text-start'>
        <h2 className="text-xl md:text-3xl text-gray-300 md:font-bold font-semibold mb-2">Asteroids Detected in the Last 7 Days</h2>
        <p className='text-gray-300 text-xs md:text-base'>
          The Asteroids Detected chart visualizes data on the number of asteroids detected by NASA over the past seven days. 
          Using the NASA Near Earth Object (NEO) API, it retrieves daily counts of near-Earth asteroids and displays them in a 
          line chart format. Each point on the chart represents a day, labeled along the x-axis, with the corresponding 
          number of detected asteroids on the y-axis. This format provides an easily understandable overview of recent 
          asteroid detection patterns, allowing users to observe any fluctuations in asteroid frequency within the 
          selected timeframe. The chart styling includes bold labels and a responsive design, improving readability 
          against a gray background.
        </p>
      </div>
      <div className='w-full md:w-1/2 md:mx-4 '>
        {chartData && (
          <Line
            ref={chartRef}
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true },
              },
              scales: {
                x: {
                  ticks: {
                    color: '#FF6384',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                  },
                  grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                  },
                },
                y: {
                  ticks: {
                    color: '#FF6384',
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                  },
                  grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ChartAsteroids;
