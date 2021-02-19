// Create-Form Schema and controls rules

const rules = [{ required: true, message: "field is required" }];

export const fieldsSetArr = [
  ["input", { label: "Product Name", name: "name", rules }],
  ["number", { label: "Current price", name: "currentPrice", className: "productPrice", rules }],
  ["number", { label: "Previous price", name: "previousPrice", className: "productPrice", rules }],
  ["select-categories", { label: "Product Catalog", name: "categories_level1", rules }, 1],
  ["select-categories", { label: "Parent Product Category", name: "categories_parent", rules }, 2],
  ["select-categories", { label: "Product Category", name: "categories", rules }, 3],
  ["input", { label: "Color", name: "color", rules }],
  ["input", { label: "Product URL", name: "productUrl", rules }],
  ["input", { label: "Brand", name: "brand", rules }],
];

// form layout settings
export const layout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};

export const tailLayout = {
  wrapperCol: {
    span: 24
  }
};

export const initialFormValues = {
  name: "test_name",
  currentPrice: 1000,
  previousPrice: 500,
  color: "red",
  productUrl: "/red",
  brand: "red_cool",
};

export const rootCloudinaryFolderName = "products";

