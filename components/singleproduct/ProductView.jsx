import React from "react";
import { PortableText } from "@portabletext/react";

export default function ProductBasicDetails(props) {
    const product = props.product;
    const { name, price, details, highlights, body } = props;

    return (
        <div className="bg-white">
            <div className="">
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-2 lg:pb-10">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {name}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-5xl tracking-tight text-gray-900 mt-5">
                            ${price}
                        </p>

                        {/* Reviews */}
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        {/* Description and details */}

                        <div className="mt-5">
                            <h3 className="text-2xl mb-5 font-light text-gray-900">Details : </h3>

                            {
                                body && (
                                    <PortableText value={body} />)
                            }
                        </div>

                        <div className="mt-10">
                            <div className="grid grid-cols-2 items-space gap-10">
                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to bag
                                </button>
                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
