
import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { PortableText } from '@portabletext/react'
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { MayShoecard } from '../../components';
import { motion, AnimateSharedLayout } from "framer-motion";
import { useStateContext } from '../../context/StateContext';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
function Item({ color, isSelected, onClick }) {
    return (
        <li className="item" onClick={onClick} >
            {isSelected && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{ borderColor: 'whtie', background: '#00FF00' }}
                    transition={spring}>
                </motion.div>
            )}
        </li>
    );
}


const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};


const ProductDetails = ({ product, products }) => {
    const { image, name, details, price, description } = product;
    const [index, setIndex] = useState(0);
    const [selectedSize, newSize] = useState(0)
    const [selected, setSelected] = useState(0);
    const { setQty, qty, onAdd, setShowCart } = useStateContext();
    const shoesizelist = product.sizelist

    let unique = [...new Set(shoesizelist)];

    const handleBuyNow = () => {
        if (checkifSize()) {
            setShowCart(true);
            document.getElementById('main-container').classList.remove("disablez");
        } else {
            console.log('nope')
            allmove()
            toast.error('Please select a size')
        }
    }

    function checkifSize() {
        if (selected === 0) {
            allmove()
            toast.error('Please select a size')
            return false
        } else {
            onAdd(product, selectedSize)
            setSelected(0)
            return true
        }
    }

    function allmove() {
        const abox = document.getElementById("animated-shoe-size");
        abox.classList.toggle("move");
    }


    return (
        <div
        >
            <div id='productdeatilscontainer' className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <div className='product-details-center'>
                        <h1>{product.name}</h1>
                        <p className="price">${product.price}</p>
                        <AnimateSharedLayout>
                            <ul id='animated-shoe-size' className='animated-shoe-size'>
                                {((unique).sort(function (a, b) { return a - b })).map(list => (
                                    <div key={list} className='item-container'>
                                        <Item
                                            isSelected={selected === list}
                                            onClick={() => {
                                                setSelected(list)
                                                newSize(list)
                                            }}
                                        />
                                        <p>{list}</p>
                                    </div>
                                ))}
                            </ul>
                        </AnimateSharedLayout>
                        <div className="buttons">
                            <button type="button" onClick={() => checkifSize()} className="add-to-cart">Add to Cart</button>
                            <button type="button" onClick={handleBuyNow} className="buy-now">Buy Now</button>
                        </div>
                        <div className='portable-text-product-details'>
                            <PortableText value={product.Desc} />
                        </div>
                        <h3 id='more-like-this-text-shoe'>More like this </h3>
                    </div>
                </div>
                <div className='product-details-recomandations-container'>
                    <div className='product-details-recomandations-card-container'>
                        {products.map((item) => (
                            <MayShoecard key={item._id} product={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}


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
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product }
    }
}

export default ProductDetails