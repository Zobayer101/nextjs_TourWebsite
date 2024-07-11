import { NextResponse,NextRequest } from "next/server"
const userDB = require("../../model/userPost");
const DB = require("../../lib/dbconnet");

await DB();
export const POST = async (req) => {
    const{linkID,Link}=await req.json()
    
    const user = new userDB({ linkID, Link });
    const data = await user.save(user);
   return new NextResponse(data)
}
export const GET = async () => {
    const data = await userDB.find({ linkID: '3' });
    return new NextResponse(data);
}
