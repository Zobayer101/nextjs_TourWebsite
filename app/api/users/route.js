import { NextResponse,NextRequest } from "next/server"
const userDB = require("../../model/userPost");
const DB = require("../../lib/dbconnet");

await DB();
// export const POST = async (req) => {
//     const{linkID,Link}=await req.json()
    
//     const user = new userDB({ linkID, Link });
//     const data = await user.save(user);
//    return new NextResponse(data)
// }
export const POST = async (req) => {
    const { ID } = await req.json();
    const data = await userDB.find({ linkID: ID });
    return new NextResponse(JSON.stringify(data[0]));
}
