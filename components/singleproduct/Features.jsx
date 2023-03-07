import React from "react";
import { urlFor } from "../../lib/client";


export default function Features(props) {

    const data = props.features;
    const images = props.images;
    const shortDescription = props.description;

    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Specifications
                    </h2>
                    <p className="mt-4 text-gray-500">
                        {shortDescription}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {data.map((feature) => (
                            <div key={feature._key} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.FeatureTitle}</dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {feature.Description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    {
                        images.slice(0, 4).map((image) => (
                            <img
                                src={urlFor(image.asset).url()}
                                key={image._key}
                                alt={image.title}
                                className="rounded-lg bg-gray-100"
                            />))
                    }
                </div>
            </div>
        </div>
    );
}