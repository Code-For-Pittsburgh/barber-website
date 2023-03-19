
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, shortDescription } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <a href="#" className="group relative block ">
          <div className="relative h-[350px] bg-black sm:h-[450px]">
            <img
              src={urlFor(image && image[0])}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={urlFor(image && image[1])}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute bg-gradient-cover inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-3xl text-white">
              {
                name
              }
            </h3>
            <p className="mt-1 text-3xl text-white">
              ${
                price
              }
            </p>



          </div>

        </a>

      </Link>
    </>

  )
}

export default Product