import React from "react";
import { Product, Footer, Gift, Banner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData, giftData }) => {
  return (
    <div>
      {/* <Banner information={bannerData.length && bannerData[1]} /> */}

      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collection</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
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

  const giftQuery = '*[_type == "gift"]';
  const giftData = await client.fetch(giftQuery);

  return {
    props: { products, bannerData, giftData },
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
const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

function Example(props) {
  const data = props.data;
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {products?.map(
              (product, index) =>
                index < 10 && <Product key={product._id} product={product} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
