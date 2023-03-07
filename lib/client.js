import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3yfklvbb",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token:
    "sklSSxFscNLfV0B3gTHzan8SGCtOciEnpeGciBgHq5FlN47Rzg48umCb4xFN3ramptsQYVzaPJ0wAqCeof6jZY91EMeFWHl4lIghOb78NWVUIZUxWo9Ak6ndBdPPeM1rdEH4WdV8FbsjY0vuI3hYX6AEXky0KQGDhzmxFl8HcI2jJlefJbKe",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
