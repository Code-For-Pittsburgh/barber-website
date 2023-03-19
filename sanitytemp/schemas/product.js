export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "Desc",
      title: "Desc",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      type: "boolean",
      name: "avaliable",
      title: "Avaliable",
      initialValue: true,
    },
    {
      type: "number",
      title: "Price",
      name: "price",
    },
    {
      type: "array",
      name: "features",
      title: "Features",
      of: [
        {
          type: "object",
          fields: [
            { name: "FeatureTitle", type: "string" },
            { name: "Description", type: "string" },
          ],
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "specificationsDescription",
      title: "Specifications Description",
      type: "text",
    },
  ],
};
