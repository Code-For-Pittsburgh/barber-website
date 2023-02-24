import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/client';

const MaylikeGift = ({ product: { image, name, slug, price } }) => {
  return (
    <div className='product-card-container-cart-shoe'>
      <Link href={`/gift/${slug.current}`}>
        <div className="product-card-shoe">
          <Image 
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

export default MaylikeGift