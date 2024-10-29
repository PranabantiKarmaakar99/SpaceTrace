// Import necessary modules
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// NASA API settings
const API_URL = 'https://api.nasa.gov/neo/rest/v1/feed';
const API_KEY = 't1rUcuMxVhZLcgENCYLCzICMV9m5NXKOMQUfCBn2';

const AsteroidPieChart = () => {
  const [chartData, setChartData] = useState(null);

  // Fetching data from NASA API
  useEffect(() => {
    const fetchAsteroidData = async () => {
      try {
        const response = await fetch(`${API_URL}?start_date=2024-10-01&end_date=2024-10-07&api_key=${API_KEY}`);
        const data = await response.json();
        const sizeCategories = { small: 0, medium: 0, large: 0 };

        // Process asteroid data by size
        data.near_earth_objects['2024-10-01'].forEach((asteroid) => {
          const diameter = asteroid.estimated_diameter.meters.estimated_diameter_max;
          if (diameter < 50) sizeCategories.small++;
          else if (diameter < 300) sizeCategories.medium++;
          else sizeCategories.large++;
        });

        setChartData({
          labels: ['Small (<50m)', 'Medium (50-300m)', 'Large (>300m)'],
          datasets: [
            {
              data: Object.values(sizeCategories),
              backgroundColor: ['#FFA07A', '#20B2AA', '#778899'],
              hoverBackgroundColor: ['#FF6347', '#3CB371', '#708090'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching asteroid data:', error);
      }
    };

    fetchAsteroidData();
  }, []);

  return (
    <div className='z-10 relative flex flex-col md:flex-row justify-center items-center bg-opacity-30 h-screen p-4'>
      <div className='flex flex-col text-center justify-center items-center w-full md:w-1/2  mb-4 md:mb-0'>
        <div className='w-4/5 mt-20 md:mt-0 text-start'>
          <h2 className='font-bold text-gray-300 text-lg md:text-3xl mb-2'>Asteroid Size Distribution</h2>
          <p className='text-gray-300 text-xs md:text-base'>
            This Asteroid Size Distribution chart visualizes the distribution of asteroids detected on October 1, 2024,
            categorized by their estimated diameters. Using data fetched from NASA's Near Earth Object (NEO) API, it groups 
            asteroids into three size categories: small (diameter less than 50 meters), medium (50–300 meters), and large 
            (more than 300 meters). Each category is represented as a slice in the pie chart, with the size of each slice 
            corresponding to the number of asteroids within that category. The chart provides a quick visual reference for 
            understanding the relative proportions of different-sized asteroids in the detected sample, with color-coded 
            segments and tooltips to enhance readability and insight.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full md:w-1/2  h-1/2'>
  
          {chartData ? <Pie data={chartData} options={chartOptions} /> : <p className='text-gray-300'>Loading data...</p>}
       
      </div>
    </div>
  );
};

export default AsteroidPieChart;

const chartOptions = {
  plugins: {
    legend: {
      labels: {
        color: 'white', // Legend label text color
      },
    },
    tooltip: {
      bodyColor: 'white',    // Tooltip text color
      titleColor: 'lightgray', // Tooltip title text color
      backgroundColor: 'black', // Tooltip background color
    },
  },
};
