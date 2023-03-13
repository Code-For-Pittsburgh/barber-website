import React from "react";
import { Product, Footer, Gift, Banner } from "../components";
import { client, urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Home = ({ products, bannerData, giftData }) => {
  const { cartItems } = useStateContext();
  return (
    <div>
      <div className="">
        <section className="pt-6 pb-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-8 p-8 bg-white rounded-3xl">
              <div className="flex flex-wrap lg:items-center -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-lg mx-auto">
                    <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                      Best caption here
                    </span>
                    <h1 className="font-heading mb-4 text-5xl text-gray-900 font-black tracking-tight">
                      <span>Build better products </span>

                      <span> than ever.</span>
                    </h1>
                    <p className="mb-6 text-xl font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis venenatis volutpat velit.
                    </p>
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="#"
                        >
                          Get Started
                        </a>
                      </div>
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                          href="#"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="max-w-max mx-auto md:mr-0 bg-white overflow-hidden rounded-3xl">
                    <img
                      className="mx-auto"
                      src={urlFor(products?.[0]?.image[0])}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collection</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 grid md:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {products?.map(
                (product, index) =>
                  index < 10 && <Product key={product._id} product={product} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <Banner information={bannerData.length && bannerData[0]} /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"] | order(_createdAt desc)';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
