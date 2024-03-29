import React from 'react'
import { urlFor } from '../lib/client';

const Banner = ({ information }) => {
  return (
    <>
      <section className="py-24 md:py-40 bg-gray-100">
        <div className="container px-4 mx-auto">

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
              <img className="block mx-auto" src={urlFor(information.image)} alt="" />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg mx-auto">
                <div className="mb-12">
                  <span className="inline-block px-5 py-2 mr-6 text-sm bg-white rounded-full">News</span>
                  <span className="font-light text-sm text-gray-700">January 13, 2022</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-10">
                  {information.bigText}
                </h2>
                <div className="mb-16"><a className="inline-block mr-6 text-indigo-500 hover:text-indigo-600" href="#">#interiodesign</a><a className="inline-block mr-6 text-indigo-500 hover:text-indigo-600" href="#">#design</a><a className="inline-block text-indigo-500 hover:text-indigo-600" href="#">#application</a></div>
                <a className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Banner