import connectDB from "@/lib/db";
import Order from "@/models/Order";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();

        const order = await Order.create({
            customerName: body.customerName,
            phoneNumber: body.phoneNumber,
            address: body.address,
            instructions: body.instructions || "",
            items: body.items || [],
            subtotal: Number(body.subtotal) || 0,
            delivery: Number(body.delivery) || 0,
            total: Number(body.total) || 0,
            status: "pending"
        });

        return Response.json({ success: true, order }, { status: 201 });
    } catch (error) {
        console.error("Order creation failed:", error);

        return Response.json(
            { success: false, message: "Failed to place order." },
            { status: 500 }
        );
    }
}
