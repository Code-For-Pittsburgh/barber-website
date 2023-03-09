import React from "react";
import { Product, Footer, Gift, Banner } from "../components";
import { client } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Home = ({ products, bannerData, giftData }) => {
  const { cartItems } = useStateContext();
  return (
    <div>
      <div className="">
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
  const query = '*[_type == "product"]';
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
