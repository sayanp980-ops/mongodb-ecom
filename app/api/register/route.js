
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, password } = await request.json();
    // একই email আছে কিনা check
    const existingUser = await User.findOne({ email });

if (existingUser) {
  return Response.json(
    {
      success: false,
      message: "Email already exists",
    },
    { status: 400 }
  );
}
// Password Hash
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
  name,
  email,
  password: hashedPassword,
});

    return Response.json(
      {
        success: true,
        message: "User Registered Successfully",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Registration Failed",
      },
      { status: 500 }
    );
  }
}