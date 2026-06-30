import connectDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();

    await Product.insertMany([
      {
        title: "Blue Sneakers",
        description: "Comfortable and stylish blue sneakers",
        price: 59.99,
        category: "Footwear",
        image: "https://picsum.photos/200/300",
      },
      {
    title: "Blue Sneakers",
    description: "Comfortable and stylish blue sneakers for everyday wear.",
    price: 59.99,
    category: "Footwear",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Red T-Shirt",
    description: "Soft and breathable red t-shirt made from 100% cotton.",
    price: 19.99,
    category: "Apparel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Black Hoodie",
    description: "Warm and comfortable hoodie for casual wear.",
    price: 39.99,
    category: "Apparel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 89.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Smart Watch",
    description: "Track fitness and notifications on the go.",
    price: 129.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Gaming Mouse",
    description: "Precision gaming mouse with RGB lighting.",
    price: 29.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Laptop Backpack",
    description: "Durable backpack with laptop compartment.",
    price: 34.99,
    category: "Accessories",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Leather Wallet",
    description: "Premium leather wallet with multiple card slots.",
    price: 24.99,
    category: "Accessories",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Sunglasses",
    description: "Stylish UV-protected sunglasses.",
    price: 14.99,
    category: "Accessories",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "White Sneakers",
    description: "Classic white sneakers for all occasions.",
    price: 64.99,
    category: "Footwear",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Running Shoes",
    description: "Lightweight running shoes for athletes.",
    price: 79.99,
    category: "Footwear",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Formal Shoes",
    description: "Elegant formal shoes for office wear.",
    price: 89.99,
    category: "Footwear",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Denim Jeans",
    description: "Comfortable slim-fit denim jeans.",
    price: 44.99,
    category: "Apparel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Casual Shirt",
    description: "Stylish casual shirt for daily wear.",
    price: 29.99,
    category: "Apparel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Winter Jacket",
    description: "Warm jacket for cold weather.",
    price: 99.99,
    category: "Apparel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with excellent sound quality.",
    price: 49.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB mechanical keyboard for gaming and work.",
    price: 69.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "USB-C Hub",
    description: "Multi-port USB-C hub for laptops.",
    price: 24.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Power Bank",
    description: "10000mAh portable power bank.",
    price: 34.99,
    category: "Electronics",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Phone Stand",
    description: "Adjustable desk stand for smartphones.",
    price: 12.99,
    category: "Accessories",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Travel Mug",
    description: "Insulated mug for hot and cold drinks.",
    price: 18.99,
    category: "Home",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Coffee Maker",
    description: "Compact coffee maker for home use.",
    price: 79.99,
    category: "Home",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Desk Lamp",
    description: "LED desk lamp with brightness control.",
    price: 27.99,
    category: "Home",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Office Chair",
    description: "Ergonomic office chair with lumbar support.",
    price: 149.99,
    category: "Furniture",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Study Table",
    description: "Modern wooden study table.",
    price: 199.99,
    category: "Furniture",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Water Bottle",
    description: "Reusable stainless steel water bottle.",
    price: 16.99,
    category: "Home",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Yoga Mat",
    description: "Comfortable non-slip yoga mat.",
    price: 22.99,
    category: "Fitness",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Dumbbell Set",
    description: "Adjustable dumbbell set for workouts.",
    price: 89.99,
    category: "Fitness",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Fitness Band",
    description: "Track daily activity and fitness goals.",
    price: 39.99,
    category: "Fitness",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Basketball",
    description: "Professional-grade basketball.",
    price: 24.99,
    category: "Sports",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Football",
    description: "Durable football for outdoor games.",
    price: 21.99,
    category: "Sports",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Cricket Bat",
    description: "Lightweight cricket bat for practice.",
    price: 49.99,
    category: "Sports",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Tennis Racket",
    description: "High-performance tennis racket.",
    price: 69.99,
    category: "Sports",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Cookware Set",
    description: "Non-stick cookware set for kitchen use.",
    price: 89.99,
    category: "Kitchen",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Knife Set",
    description: "Premium stainless steel kitchen knives.",
    price: 39.99,
    category: "Kitchen",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Rice Cooker",
    description: "Automatic rice cooker with timer.",
    price: 59.99,
    category: "Kitchen",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Air Fryer",
    description: "Healthy cooking with less oil.",
    price: 99.99,
    category: "Kitchen",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Book Shelf",
    description: "Wooden bookshelf with multiple compartments.",
    price: 119.99,
    category: "Furniture",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Bean Bag",
    description: "Comfortable bean bag for relaxation.",
    price: 54.99,
    category: "Furniture",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Table Clock",
    description: "Modern table clock with silent movement.",
    price: 15.99,
    category: "Home",
    image: "https://picsum.photos/200/300",
  }

    ]);

    return Response.json({
      message: "Products inserted successfully",
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
