import React from "react";
import { Product, Footer, Gift, Banner } from "../components";
import { client, urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Home = ({ products, bannerData, giftData }) => {
  const { cartItems } = useStateContext();
  return (
    <div
      className="
    bg-black
    max-w-7xl mx-auto
    "
    >
      <section>
        <div className=" mx-auto bg-black">
          <ul className="grid grid-cols-1 gap-1 lg:grid-cols-3">
            <li className="lg:col-span-2 lg:col-start-2  lg:row-span-2 lg:row-start-1 ">
              <a href="#" className="relative block group bg-black ">
                <img
                  src={urlFor(products?.[0]?.image[0])}
                  alt=""
                  className="object-cover  w-full transition duration-500 aspect-square opacity-75 transition-opacity group-hover:opacity-50"
                />
                <div className="absolute z-10	 inset-0 flex flex-col items-start justify-end p-6 ">
                  <h3 className="text-5xl mb-10 font-medium text-white translate-y-8 transform transition-all group-hover:translate-y-0">
                    {products?.[0]?.name} - ${products?.[0]?.price}
                  </h3>
                  <div className="translate-y-8 transform opacity-0 transition-all hidden group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-base text-white">
                      {products?.[0]?.shortDescription}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute z-0 inset-0 
                  bg-gradient-cover
                  h-1/6	 w-full
                "
                ></div>
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="relative block  transition duration-500 ease-in-out"
              >
                <img
                  src={urlFor(products?.[0]?.image[2])}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square"
                />

                <div
                  className="absolute z-0 inset-0 
                  bg-gradient-cover
                  h-1/6	 w-full
                "
                ></div>
              </a>
            </li>
            <li>
              <a href="#" className="relative block ">
                <img
                  src={urlFor(products?.[0]?.image[1])}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square"
                />

                <div
                  className="absolute z-0 inset-0 
                  bg-gradient-cover
                  h-1/6	 w-full
                "
                ></div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="mx-auto bg-black">
        <div className="mx-auto max-w-2xl  lg:max-w-none">
          <header
            className="
           py-12 lg:py-20 text-left px-5
          "
          >
            <h2
              className="text-5xl  
             font-bold  text-white uppercase tracking-wider"
            >
              Product Collection
            </h2>

            <p
              className=" max-w-xl
             mt-4 text-xl text-gray-300 leading-7"
            >
              Shop our latest collection of products
            </p>
          </header>

          <div className="mt-6  lg:grid lg:grid-cols-2 grid md:grid-cols-2 lg:gap-x-1 gap-y-1 lg:space-y-0">
            {products?.map(
              (product, index) =>
                index < 10 && <Product key={product._id} product={product} />
            )}
          </div>
        </div>
      </div>

      {/* <Banner information={bannerData.length && bannerData[0]} /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == 'product']{
    avaliable,
    image,
    name,
    price,
    shortDescription,
    slug,
  }`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
