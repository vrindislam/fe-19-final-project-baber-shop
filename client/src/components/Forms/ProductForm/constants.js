// Create-Form Schema and controls rules

const rules = [{ required: true, message: "field is required" }];

export const fieldsSetArr = [
  ["checkbox", { label: "Enabled", name: "enabled", className: "productPrice", touched: false }],
  ["input", { label: "Product Name", name: "name", rules, touched: true }],
  ["number", { label: "Current price", name: "currentPrice", className: "productPrice", rules, touched: true }],
  ["number", { label: "Quantity", name: "quantity", className: "productPrice", rules, touched: true }],
  ["select-categories", { label: "Product Catalog", name: "categories_level1", rules, touched: true }, 1],
  ["select-categories", { label: "Parent Product Category", name: "categories_parent", rules, touched: true }, 2],
  ["select-categories", { label: "Product Category", name: "categories", rules, touched: true }, 3],
  ["select-filter", { label: "Country", name: "country", rules, touched: true }],
  ["select-filter", { label: "Brand", name: "brand", rules, touched: true }],
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
  name: "",
  currentPrice: 0,
  quantity: 1,
  enabled: true
};

export const rootCloudinaryFolderName = "products";

