import React from 'react';

const Subscribe = () => {
  return (
    <div className="bg-[#1B6392] text-center py-16 px-4 sm:px-6">
      <div className="max-w-[1220px] mx-auto">
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-sm sm:text-base mt-3">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
        </div>

        {/* Input + Button */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-[600px] mx-auto">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 p-4 rounded focus:outline-none"
          />
          <button className="bg-[#FF8A35] text-white px-6 py-3 rounded w-full sm:w-auto hover:bg-orange-600 transition">
            SUBSCRIBE →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
