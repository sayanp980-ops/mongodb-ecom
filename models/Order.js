import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, "Customer name is required"],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Delivery address is required"],
        trim: true
    },
    instructions: {
        type: String,
        default: ""
    },
    items: [
        {
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true,
                min: 0
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            image: {
                type: String,
                required: true
            }
        }
    ],
    subtotal: {
        type: Number,
        required: true,
        min: 0
    },
    delivery: {
        type: Number,
        required: true,
        min: 0
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "confirmed", "cancelled", "delivered"]
    }
}, {
    timestamps: true
});

export default mongoose.models.Order ||
    mongoose.model("Order", orderSchema);
