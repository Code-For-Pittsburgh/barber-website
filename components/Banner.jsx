import React from 'react'
import { urlFor } from '../lib/client';

const Banner = ({ information }) => {
  return (
    <>


      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="pt-16 px-16 bg-gradient-cyan2 rounded-2xl">
            <div className="flex flex-wrap items-center -m-6 pb-16">
              <div className="w-auto lg:w-1/2 p-6">
                <div className="lg:max-w-md">
                  <h2 className="mb-6 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">{information.bigText}</h2>
                  <p className="mb-10 text-gray-600 text-base">{information.smalltext}</p>
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-full lg:w-auto p-1.5">
                      <button className="group relative font-heading px-6 py-4 w-full lg:w-auto uppercase text-white text-xs font-semibold bg-gray-900 overflow-hidden rounded-md tracking-px">
                        <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800" />
                        <p className="relative z-10">Explore</p>
                      </button>
                    </div>
                    <div className="w-full lg:w-auto p-1.5">
                      <button className="font-heading px-6 py-4 w-full lg:w-auto uppercase text-gray-900 text-xs font-semibold bg-white hover:bg-gray-50 rounded-md tracking-px">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:w-1/2 p-6">
                <img className="mx-auto transform hover:-translate-x-24 transition ease-in-out duration-500" src={urlFor(information.image)} alt="" />
              </div>
            </div>
            <ul className="flex flex-wrap w-full border-t border-white border-opacity-30 justify-center">
              <li className="p-3.5 lg:p-7 flex items-center font-heading font-semibold text-lg text-gray-900">
                <p>No hidden feels</p>
              </li>
              <li className="p-3.5 lg:p-7 flex items-center font-heading font-semibold text-lg text-gray-900">
                <p>Made Local</p>
              </li>
              <li className="p-3.5 lg:p-7 flex items-center font-heading font-semibold text-lg text-gray-900">
                <p>All handcrafted</p>
              </li>
              <li className="p-3.5 lg:p-7 flex items-center font-heading font-semibold text-lg text-gray-900">
                <p>Secured payment</p>
              </li>
            </ul>
          </div>
        </div>
      </section>






    </>

  )
}

export default Banner