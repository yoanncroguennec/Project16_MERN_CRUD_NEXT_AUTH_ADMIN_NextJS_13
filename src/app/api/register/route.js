// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import connect from "../../server/config/db";
// import User from "../../server/models/User";
import nc from "next-connect";
import { registerUser } from "../../server/controllers/AuthCtrl";
import dbConnect from "../../server/config/db";

const handler = nc();

dbConnect();

handler.post(registerUser);

export default handler;

// export const POST = async (request) => {
//   const { name, email, password } = await request.json();

//   await connect();

//   const hashedPassword = await bcrypt.hash(password, 5);

//   const newUser = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("User has been created", {
//       status: 201,
//     });
//   } catch (err) {
//     return new NextResponse(err.message, {
//       status: 500,
//     });
//   }
// };
