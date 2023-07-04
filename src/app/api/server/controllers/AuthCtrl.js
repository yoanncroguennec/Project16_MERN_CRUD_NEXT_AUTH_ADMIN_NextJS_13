import bcrypt from "bcryptjs";
// import connect from "../config/db";
import User from "../models/User";
import { NextResponse } from "next/server";


export const registerUser = async (req, res) => {
  const { name, email, password } = await req.json();

//   await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

