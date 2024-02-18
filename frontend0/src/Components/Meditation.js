import React from 'react'
import medimg from '../assets/Meditation.jpg'

const Meditation = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  
                  <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Meditation</p>
                  <p className="mt-1 text-1xl text-center  tracking-tight text-gray-400 sm:text-1xl">Sit in a comfortable position, focus on your breathing.</p>
                  <div className="mt-6 text-lg leading-8 text-gray-600">
                  <div className="flex flex-col items-center justify-center space-y-4">
      <button className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Silence
      </button>
      <button className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Only Music
      </button>
      <button className="w-full bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Guided Meditation
      </button>
    </div>
                  </div>
                 
                </div>
              </div>
              <img
                src={medimg}
                alt="Meditation"
                className="w-[37rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 "
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      )
}

export default Meditation
