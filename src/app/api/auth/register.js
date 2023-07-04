import nc from "next-connect";
import dbConnect from "../server/config/db";
import { registerUser } from "../server/controllers/AuthCtrl";


const handler = nc();

dbConnect();

handler.post(registerUser);

export default handler;
