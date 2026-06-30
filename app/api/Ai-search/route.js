import conectDB from "@/lib/db";
import Product from "../../../models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { query } = await request.json();

  await conectDB();

  const products = await Product.find({
    title: { $regex: query, $options: "i" },
  });

  return NextResponse.json(products);
}