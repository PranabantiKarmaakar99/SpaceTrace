// src/Pages/About.js

import React from "react";

export function About() {
  return (
    <div className="min-h-screen z-10 relative  text-gray-300 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About SpaceTrace</h1>
        <p className="text-xl mb-8 italic">"Charting the Cosmos, One Asteroid at a Time!"</p>

        <section className=" p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            SpaceTrace is designed to bring the fascinating world of asteroids to everyone. Our mission is to make space data accessible, engaging, and informative through interactive charts and real-time updates. We aim to foster curiosity about the cosmos by helping users track and visualize asteroid data over time.
          </p>
        </section>

        {/* <section className=" p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-left text-gray-300">
            <li>📊 **Asteroid Tracking**: See real-time and historical data on various asteroids, including size, speed, and distance from Earth.</li>
            <li>🌌 **Interactive Charts**: Visualize asteroid data with multiple chart types, including line charts, bar charts, and scatter plots.</li>
            <li>📅 **Time-Based Analysis**: Track the movement of asteroids over days, weeks, or even years, making it easy to see patterns and trends.</li>
            <li>🔍 **Detailed Insights**: Explore asteroid attributes like diameter, velocity, proximity to Earth, and potential risk factors.</li>
            <li> The Asteroids Detected chart visualizes data on the number of asteroids detected by NASA over the past seven days. Using the NASA Near Earth Object (NEO) API, it retrieves daily counts of near-Earth asteroids and displays them in a line chart format. Each point on the chart represents a day, labeled along the x-axis, with the corresponding number of detected asteroids on the y-axis. This format provides an easily understandable overview of recent asteroid detection patterns, allowing users to observe any fluctuations in asteroid frequency within the selected timeframe. The chart styling includes bold labels and a responsive design, improving readability against a gray background.</li>
          </ul>
        </section> */}

        <section className=" p-4 ">
          <h2 className="text-2xl font-semibold mb-4">Why Track Asteroids?</h2>
          <p className="text-gray-300 leading-relaxed">
            Asteroids are celestial bodies that have fascinated scientists and space enthusiasts alike. By tracking their trajectories, sizes, and speeds, we can gain insights into our solar system’s history, understand potential Earth impacts, and prepare for space exploration. SpaceTrace makes this data accessible, empowering users to explore and understand these "wanderers" of space in a visually engaging way.
          </p>
        </section>

        <section className=" p-4 ">
          <h2 className="text-2xl font-semibold mb-4">SignUp for Latest Updates</h2>
          <p className="text-gray-300 leading-relaxed">
          Don't miss out on the latest updates, news, and exclusive insights! By signing up for our newsletter, you’ll be the first to know about new features, special offers, and insightful content. Whether you're here to explore new perspectives, gain knowledge, or simply stay informed about our journey, our newsletter keeps you connected and in the loop.
          </p>
        </section>
      </div>
    </div>
  );
}
