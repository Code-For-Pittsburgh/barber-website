import React from "react";
import { Product, Footer, Gift, Banner } from "../components";
import { client, urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Home = ({ products, bannerData, giftData, categories }) => {
  const { cartItems } = useStateContext();
  console.log(products);
  return (
    <>
      <section className="relative">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src="https://shuffle.dev/vendia-assets/images/header/bg-color-gradient.png"
          alt=""
        />

        <img
          className="hidden xl:block absolute bottom-0 left-1/2 h-full transform -translate-x-1/2 ml-20 2xl:ml-0 z-10"
          src="https://shuffle.dev/vendia-assets/images/header/woman-middle-bg.png"
          alt=""
        />
        <img
          className="hidden lg:block xl:hidden absolute bottom-0 right-0 mr-12 h-full"
          src="https://shuffle.dev/vendia-assets/images/header/woman-middle-bg.png"
          alt=""
        />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-end">
            <div className="w-full lg:w-auto">
              <div className="max-w-md xl:max-w-xl pt-12 md:pt-24 xl:pt-48 lg:pb-52 mb-20 lg:mb-0 mx-auto xl:mx-0">
                <div className="relative mb-14">
                  <img
                    className="absolute top-1/2 right-1/2 md:-mr-32 h-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 md:w-auto"
                    src="vendia-assets/images/header/smuge-yellow.svg"
                    alt=""
                  />
                  <div className="relative">
                    <h1 className="font-heading block font-bold text-7xl xs:text-10xl md:text-11xl text-white">
                      Explore the new <br />
                      <span className="text-yellow-500">Collection</span>
                    </h1>
                  </div>
                </div>
                <div className="max-w-sm 2xl:ml-14">
                  <p className="font-medium text-white">
                    "Introducing the 'Wildflower' Collection - a range of
                    clothing that celebrates the free-spirited and adventurous
                    nature of women. Inspired by the beauty and resilience of
                    wildflowers, this collection features a mix of
                    bohemian-inspired styles, soft feminine silhouettes, and
                    earthy tones that capture the essence of nature.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:hidden w-full">
              <div className="max-w-md mx-auto xl:mr-0 py-8 px-8 px-sm-12 bg-black">
                <p className="text-base sm:text-2xl font-medium text-white mb-7"></p>
                <a
                  className="inline-flex items-center font-bold text-yellow-500"
                  href="#"
                >
                  <span className="mr-3">Explore Collections</span>
                  <svg
                    width={11}
                    height={12}
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block absolute bottom-0 right-0 max-w-md mx-auto xl:mr-0 py-8 px-12 bg-black"
            style={{ zIndex: 1 }}
          >
            <p className="text-xl font-medium text-white mb-7">
              "Introducing the 'Wildflower' Collection
            </p>
            <a
              className="group inline-flex items-center font-bold text-yellow-500 hover:text-yellow-600"
              href="#"
            >
              <span className="mr-3">Explore Collections</span>
              <span className="animate-bounce">
                <svg
                  width={11}
                  height={12}
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          <img
            className="block lg:hidden w-full max-w-md mx-auto"
            src="vendia-assets/images/header/woman-middle-bg.png"
            alt=""
          />
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 mt-10 py-2 mx-auto sm:px-6 sm:py-2 lg:px-8">
          <header className="text-left">
            <h2 className="text-xl font-bold text-white sm:text-5xl">
              Shop by Category
            </h2>
            <p className="max-w-md mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {categories.slice(0, 6).map((category, index) => (
              <li key={index}>
                <a href="#" className="relative block group">
                  <img
                    src={urlFor(category.image).url()}
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                    <span className="mt-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 md:pb-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-12 items-end">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <h1 className="font-heading font-bold text-2xl text-white">
                Trending Products
              </h1>
            </div>
            <div className="w-full lg:w-auto px-4 ml-auto lg:text-right">
              <a
                className="inline-flex py-2 px-4 items-center text-sm text-center font-bold bg-yellow-500 hover:bg-yellow-600 transition duration-200"
                href="#"
              >
                <span className="mr-3">Explore Collection</span>
                <svg
                  width={14}
                  height={12}
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33333 1.33331L13 5.99998M13 5.99998L8.33333 10.6666M13 5.99998L1 5.99998"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-8">
            {products.map((product, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <a
                  className="group block"
                  href={
                    product.avaliable ? `/product/${product.slug.current}` : "#"
                  }
                >
                  <img
                    className="block mb-5 w-full h-72 object-cover"
                    src={urlFor(product.image[0]).url()}
                    alt=""
                  />
                  <div>
                    <h6 className="font-bold text-white group-hover:text-yellow-500 mb-2">
                      {product.name}
                    </h6>

                    <span className="text-sm font-bold text-yellow-500">
                      ${product.price}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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

  const categoryQuery = `*[_type == 'collection']{
    ...
  }
  `;

  const products = await client.fetch(query);
  const categories = await client.fetch(categoryQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, categories },
  };
};

export default Home;
