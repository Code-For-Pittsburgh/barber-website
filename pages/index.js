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
      <section className="pb-12 md:pb-24 lg:pb-32 bg-black">
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap pt-20 justify-center items-center relative">
            <div className="xl:w-1/3 px-4 mb-16 lg:mb-0">
              <div className="relative xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
                <h1 className="block font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-white">
                  VIBE OF
                </h1>
                <h1 className="sm:pl-6 lg:pl-16 font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-300 to-blue-500 mb-6">
                  SUMMER
                </h1>
                <div className="sm:ml-12 xl:ml-40">
                  <p className="text-2xl font-light text-white mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing a elit.
                    Nullam to dictum aliquet accumsan porta lectus ridiculus in
                    these mattis.
                  </p>
                  <a
                    className="group inline-flex items-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white hover:from-yellow-500 hover:via-green-300 hover:to-blue-500"
                    href="#"
                  >
                    <span className="mr-3">Explore Collections</span>
                    <span className="animate-bounce">
                      <svg
                        width={11}
                        height={10}
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.95669 0.757299L9.55635 0.757299M9.55635 0.757299L9.55635 7.35696M9.55635 0.757299L1.07107 9.24258"
                          stroke="url(#paint0_linear_2717_1011)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2717_1011"
                            x1="-2.22876"
                            y1="5.94275"
                            x2="12.1078"
                            y2="1.59138"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FBFF25">
                              <stop offset="0.21875" stopColor="#E7E542">
                                <stop offset="0.453125" stopColor="#AAEA5E">
                                  <stop offset="0.697917" stopColor="#51D9C6">
                                    <stop offset={1} stopColor="#4AA8FF" />
                                  </stop>
                                </stop>
                              </stop>
                            </stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-2/3 xl:order-first">
              <div className="block md:flex max-w-5xl lg:max-w-none mx-auto">
                <div className="flex flex-col justify-center mb-6 md:mb-0 md:mr-8 xl:mr-20"></div>
                <div>
                  <img
                    className="block mx-auto object-cover object-center w-full h-full"
                    src={urlFor(products?.[0]?.image[3])}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-2xl font-medium leading-none" href="#">
                <img
                  className="h-6"
                  src="vendia-assets/logos/vendia-dark.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 font-medium text-black hover:bg-gray-50"
                    href="#"
                  >
                    Women
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 font-medium text-black hover:bg-gray-50"
                    href="#"
                  >
                    Men
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 font-medium text-black hover:bg-gray-50"
                    href="#"
                  >
                    Kids
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 font-medium text-black hover:bg-gray-50"
                    href="#"
                  >
                    Browse
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block mb-2 py-3 text-sm text-center border border-gray-200 hover:border-gray-400 font-bold"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="block py-3 text-sm text-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold transition duration-200"
                  href="#"
                >
                  Sign In
                </a>
              </div>
            </div>
          </nav>
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
