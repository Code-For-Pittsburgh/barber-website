import React from "react";
import { Product, Footer, Gift, Banner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData, giftData }) => {
  return (
    <div>
      <Banner information={bannerData.length && bannerData[1]} />

      <div className="Shoe-collection-container">
        <h1>Top Shoes</h1>
        <p>100% Authentic</p>
        <div className="shoe-pruducts-collection-containers">
          {products?.map(
            (product, index) =>
              index < 14 && <Product key={product._id} product={product} />
          )}
        </div>
        {/* 
                <h1>
          Best Fits
        </h1>
        <p>
          100% Authentic
        </p>
        <div className='gift-pruducts-collection-containers'>
          {giftData?.map((giftData, index) => index < 8 && (<Gift key={giftData._id} product={giftData} />))}
        </div>
        <button type='button' className='index-explore-more-shoes-button'>more</button>
        */}
        <button type="button" className="index-explore-more-shoes-button">
          more
        </button>
      </div>

      <Banner information={bannerData.length && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const giftQuery = '*[_type == "gift"]';
  const giftData = await client.fetch(giftQuery);

  return {
    props: { products, bannerData, giftData },
  };
};

export default Home;
