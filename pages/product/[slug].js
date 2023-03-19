import React, { useState, useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { MayShoecard } from "../../components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useStateContext } from "../../context/StateContext";
import { toast } from "react-hot-toast";
import Image from "next/image";
import ProductBasicDetails from "../../components/singleproduct/ProductView";
import Features from "../../components/singleproduct/Features";
import { RadioGroup } from "@headlessui/react";
import { PortableText } from "../../lib/sanity";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = ({ product, products }) => {
  const {
    image,
    name,
    details,
    price,
    features,
    body,
    specificationsDescription,
    shortDescription,
  } = product;
  const [index, setIndex] = useState(0);

  const handleBuyNow = () => {
    onAdd(
      {
        name: name,
        price: price,
        image: image,
      },
      qty
    );
    setShowCart(true);
  };

  const handleAddToCart = () => {
    onAdd(
      {
        name: name,
        price: price,
        image: image,
      },
      qty
    );
  };
  const [selectedColor, setSelectedColor] = useState(productz.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productz.sizes[2]);

  return (
    <section className=" mx-auto max-w-7xl">
      <div className="">
        <ul className="grid grid-cols-1 gap-1 mt-8 lg:grid-cols-4 md:grid-cols-2">
          {image.map((img, index) => (
            <li
              className="
            lg:block md:block sm:block hidden
            "
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <div href="#" className="relative block group">
                <img
                  src={urlFor(image[index])}
                  alt="image"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  onMouseEnter={(i) => setIndex(index)}
                />
              </div>
            </li>
          ))}

          <li
            className="lg:col-span-2 lg:row-span-2 lg:row-start-1
          md:col-span-2 md:row-span-2 md:row-start-1
          "
          >
            <div className="relative block group">
              <img
                src={urlFor(image[index])}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {productz.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-white"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={productz.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-white"
                >
                  {productz.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-zinc-900 lg:pr-8">
              <h1 className="tracking-tight text-white text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                {name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 ">
              <h2 className="sr-only">Product information</h2>
              <h1>
                <span className="sr-only">Price</span>
                <span
                  className="
                racking-tight text-white text-4xl font-extrabold sm:text-5xl lg:text-6xl 
              "
                >
                  ${price}
                </span>
              </h1>

              {/* Reviews */}

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-white">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Choose a color{" "}
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {productz.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {" "}
                            {color.name}{" "}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Choose a size{" "}
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {productz.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer  text-white shadow-sm"
                                : "cursor-not-allowed bg-gray-900 text-gray-200",
                              active ? "ring-1 ring-zinc-900" : "",
                              "group relative flex items-center justify-center rounded-md border border-zinc-800 py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "border border-zinc-900"
                                      : "border-1 border-zinc-900",
                                    checked
                                      ? "border-white"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-zinc-900"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-zinc-900 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div>
                  <p
                    className="mt-4 text-sm sm:text-base lg:text-sm xl:text-base max-w-prose text-gray-300 font-light
                  
                  "
                  >
                    {shortDescription}
                  </p>

                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                      <div
                        key={feature._key}
                        className="border-t border-zinc-900 pt-4"
                      >
                        <dt
                          className="font-medium text-white text-base sm:text-lg 
                        "
                        >
                          {feature.FeatureTitle}
                        </dt>
                        <dd className="mt-2 text-sm text-gray-500">
                          {feature.Description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="space-y-6 prose prose-base prose-invert prose-a:text-blue-500 mt-10">
                  <PortableText value={body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl text-white">
          You may also like
        </h1>
      </div>
      <div className="mt-6  lg:grid lg:grid-cols-3 grid md:grid-cols-2 lg:gap-x-1 gap-y-1 lg:space-y-0">
        {products?.map(
          (product, index) =>
            index < 10 && <Product key={product._id} product={product} />
        )}
      </div>
    </section>
  );
};

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == 'product']{
    avaliable,
    image,
    name,
    price,
    shortDescription,
    slug,
  }`;
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;

const productz = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [{ id: 2, name: "Clothing", href: "#" }],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
