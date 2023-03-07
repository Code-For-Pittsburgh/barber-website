
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div key={name} className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={urlFor(image && image[0])}
              alt={name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-xl">
            <span className="absolute inset-0" />
            ${price}
          </h3>
          <p className="text-xl font-semibold text-gray-900">
            {name}
          </p>

        </div>
      </Link>
    </>

  )
}

export default Product