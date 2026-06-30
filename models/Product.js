import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Product description is required"]
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price cannot be negative"]
  },
  category: {
    type: String,
    required: [true, "Product category is required"]
  },
  image: {
    type: String,
    required: [true, "Product image URL is required"]
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default mongoose.models.Product ||
mongoose.model("Product", productSchema);