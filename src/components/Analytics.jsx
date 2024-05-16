import React from 'react';

import laptop from '../assets/laptop.jpg';

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={laptop}
          alt="Analytic image"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            nam, dolorum eveniet magnam qui porro molestiae tenetur, veritatis
            natus nihil rem minima officia dicta? Velit sit molestiae porro
            corporis quasi.
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-semibold mx-auto md:mx-0 my-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
