import connectDB from "@/lib/db";
import Product from "@/models/Product";


export async function GET() {
  try {
    await connectDB();

    await Product.deleteMany({});
    await Product.insertMany([

      {
        title: "Blue Sneakers",
        description: "Comfortable and stylish blue sneakers",
        price: 59.99,
        category: "Footwear",
        image: "/images/blue-sneakers.jpg",
      },
      {
        title: "Red T-Shirt",
        description: "Soft and breathable red t-shirt made from 100% cotton.",
        price: 19.99,
        category: "Apparel",
        image: "/images/red-tshirt.jpg",
      },
      {
        title: "Black Hoodie",
        description: "Warm and comfortable hoodie for casual wear.",
        price: 39.99,
        category: "Apparel",
        image: "/images/Black-Hoodie.jpg",
      },
      {
        title: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 89.99,
        category: "Electronics",
        image: "/images/wireless-headphones.jpg",
      },
      {
        title: "Smart Watch",
        description: "Track fitness and notifications on the go.",
        price: 129.99,
        category: "Electronics",
        image: "/images/smart-watch.jpg",
      },
      {
        title: "Gaming Mouse",
        description: "Precision gaming mouse with RGB lighting.",
        price: 29.99,
        category: "Electronics",
        image: "/images/gaming-mouse.jpg",
      },
      {
        title: "Laptop Backpack",
        description: "Durable backpack with laptop compartment.",
        price: 34.99,
        category: "Accessories",
        image: "/images/laptop-backpack.jpg",
      },
      {
        title: "Leather Wallet",
        description: "Premium leather wallet with multiple card slots.",
        price: 24.99,
        category: "Accessories",
        image: "/images/leather-wallet.jpg",
      },
      {
        title: "Sunglasses",
        description: "Stylish UV-protected sunglasses.",
        price: 14.99,
        category: "Accessories",
        image: "/images/sunglasses.jpg",
      },
      {
        title: "White Sneakers",
        description: "Classic white sneakers for all occasions.",
        price: 64.99,
        category: "Footwear",
        image: "/images/white-sneakers.jpg",
      },
      {
        title: "Running Shoes",
        description: "Lightweight running shoes for athletes.",
        price: 79.99,
        category: "Footwear",
        image: "/images/running-shoes.jpg",
      },
      {
        title: "Formal Shoes",
        description: "Elegant formal shoes for office wear.",
        price: 89.99,
        category: "Footwear",
        image: "/images/formal-shoes.jpg",
      },
      {
        title: "Denim Jeans",
        description: "Comfortable slim-fit denim jeans.",
        price: 44.99,
        category: "Apparel",
        image: "/images/Denim Jeans.jpg",
      },
      {
        title: "Casual Shirt",
        description: "Stylish casual shirt for daily wear.",
        price: 29.99,
        category: "Apparel",
        image: "/images/Casual Shirt.jpg",
      },
      {
        title: "Winter Jacket",
        description: "Warm jacket for cold weather.",
        price: 99.99,
        category: "Apparel",
        image: "/images/Winter Jacket.jpg",
      },
      {
        title: "Bluetooth Speaker",
        description: "Portable speaker with excellent sound quality.",
        price: 49.99,
        category: "Electronics",
        image: "/images/Bluetooth Speaker.jpg",
      },
      {
        title: "Mechanical Keyboard",
        description: "RGB mechanical keyboard for gaming and work.",
        price: 69.99,
        category: "Electronics",
        image: "/images/Mechanical Keyboard.jpg",
      },
      {
        title: "USB-C Hub",
        description: "Multi-port USB-C hub for laptops.",
        price: 24.99,
        category: "Electronics",
        image: "/images/USB-C Hub.jpg",
      },
      {
        title: "Power Bank",
        description: "10000mAh portable power bank.",
        price: 34.99,
        category: "Electronics",
        image: "/images/Power Bank.jpg",
      },
      {
        title: "Phone Stand",
        description: "Adjustable desk stand for smartphones.",
        price: 12.99,
        category: "Accessories",
        image: "/images/Phone Stand.jpg",
      },
      {
        title: "Travel Mug",
        description: "Insulated mug for hot and cold drinks.",
        price: 18.99,
        category: "Home",
        image: "/images/Travel Mug.jpg",
      },
      {
        title: "Coffee Maker",
        description: "Compact coffee maker for home use.",
        price: 79.99,
        category: "Home",
        image: "/images/Coffee Maker.jpg",
      },
      {
        title: "Desk Lamp",
        description: "LED desk lamp with brightness control.",
        price: 27.99,
        category: "Home",
        image: "/images/Desk Lamp.jpg",
      },
      {
        title: "Office Chair",
        description: "Ergonomic office chair with lumbar support.",
        price: 149.99,
        category: "Furniture",
        image: "/images/Office Chair.jpg",
      },
      {
        title: "Study Table",
        description: "Modern wooden study table.",
        price: 199.99,
        category: "Furniture",
        image: "/images/Study Table.jpg",
      },
      {
        title: "Water Bottle",
        description: "Reusable stainless steel water bottle.",
        price: 16.99,
        category: "Home",
        image: "/images/Water Bottle.jpg",
      },
      {
        title: "Yoga Mat",
        description: "Comfortable non-slip yoga mat.",
        price: 22.99,
        category: "Fitness",
        image: "/images/Yoga Mat.jpg",
      },
      {
        title: "Dumbbell Set",
        description: "Adjustable dumbbell set for workouts.",
        price: 89.99,
        category: "Fitness",
        image: "/images/Dumbbell Set.jpg",
      },
      {
        title: "Fitness Band",
        description: "Track daily activity and fitness goals.",
        price: 39.99,
        category: "Fitness",
        image: "/images/Fitness Band.jpg",
      },
      {
        title: "Basketball",
        description: "Professional-grade basketball.",
        price: 24.99,
        category: "Sports",
        image: "/images/Basketball.jpg",
      },
      {
        title: "Football",
        description: "Durable football for outdoor games.",
        price: 21.99,
        category: "Sports",
        image: "/images/Football.jpg",
      },
      {
        title: "Cricket Bat",
        description: "Lightweight cricket bat for practice.",
        price: 49.99,
        category: "Sports",
        image: "/images/Cricket Bat.jpg",
      },
      {
        title: "Tennis Racket",
        description: "High-performance tennis racket.",
        price: 69.99,
        category: "Sports",
        image: "/images/Tennis Racket.jpg",
      },
      {
        title: "Cookware Set",
        description: "Non-stick cookware set for kitchen use.",
        price: 89.99,
        category: "Kitchen",
        image: "/images/Cookware Set.jpg",
      },
      {
        title: "Knife Set",
        description: "Premium stainless steel kitchen knives.",
        price: 39.99,
        category: "Kitchen",
        image: "/images/Knife Set.jpg",
      },
      {
        title: "Rice Cooker",
        description: "Automatic rice cooker with timer.",
        price: 59.99,
        category: "Kitchen",
        image: "/images/Rice Cooker.jpg",
      },
      {
        title: "Air Fryer",
        description: "Healthy cooking with less oil.",
        price: 99.99,
        category: "Kitchen",
        image: "/images/Air Fryer.jpg",
      },
      {
        title: "Book Shelf",
        description: "Wooden bookshelf with multiple compartments.",
        price: 119.99,
        category: "Furniture",
        image: "/images/Book Shelf.jpg",
      },
      {
        title: "Bean Bag",
        description: "Comfortable bean bag for relaxation.",
        price: 54.99,
        category: "Furniture",
        image: "/images/Bean Bag.jpg",
      },
      {
        title: "Table Clock",
        description: "Modern table clock with silent movement.",
        price: 15.99,
        category: "Home",
        image: "/images/Table Clock.jpg",
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
