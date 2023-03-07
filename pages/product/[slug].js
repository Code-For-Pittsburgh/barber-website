import React, { useState, useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { MayShoecard } from "../../components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useStateContext } from "../../context/StateContext";
import { toast } from "react-hot-toast";
import Image from "next/image";
import ProductBasicDetails from "../../components/singleproduct/ProductView";
import Features from "../../components/singleproduct/Features";
function Item({ color, isSelected, onClick }) {
  return (
    <li className="item" onClick={onClick}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: "whtie", background: "#00FF00" }}
          transition={spring}
        ></motion.div>
      )}
    </li>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const productz = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
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
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
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

const ProductDetails = ({ product, products }) => {
  const {
    image,
    name,
    details,
    price,
    features,
    body,
    specificationsDescription,
  } = product;
  const [index, setIndex] = useState(0);
  const [selectedSize, newSize] = useState(0);
  const [selected, setSelected] = useState(0);
  const { setQty, qty, onAdd, setShowCart } = useStateContext();
  const shoesizelist = product.sizelist;

  let unique = [...new Set(shoesizelist)];

  const handleBuyNow = () => {
    if (checkifSize()) {
      setShowCart(true);
      document.getElementById("main-container").classList.remove("disablez");
    } else {
      console.log("nope");
      allmove();
      toast.error("Please select a size");
    }
  };

  function checkifSize() {
    if (selected === 0) {
      allmove();
      toast.error("Please select a size");
      return false;
    } else {
      onAdd(product, selectedSize);
      setSelected(0);
      return true;
    }
  }

  function allmove() {
    const abox = document.getElementById("animated-shoe-size");
    abox.classList.toggle("move");
  }

  return (
    <div>
      <div id="productdeatilscontainer" className="product-detail-container">
        <div className="grid lg:grid-cols-2 lg:items-start">
          <div>
            <div className="image-container">
              <img
                src={urlFor(image && image[index])}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <ProductBasicDetails
            price={price}
            name={name}
            product={productz}
            body={body}
          />
        </div>
        <Features
          features={features}
          images={image}
          description={specificationsDescription}
        />

        <MoreLikeThis />

        <div className="product-details-recomandations-container">
          <div className="product-details-recomandations-card-container">
            {products.map((item) => (
              <MayShoecard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;

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
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];
function MoreLikeThis() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
