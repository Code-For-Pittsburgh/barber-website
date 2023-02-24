import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const MayCardShoe = ({ product: { image, name, slug, price } }) => {
  return (
    <div className='product-card-container-cart-shoe'>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card-shoe">
          <img 
          alt='none'
            src={urlFor(image && image[0])}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default MayCardShoe