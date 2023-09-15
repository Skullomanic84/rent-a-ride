import { connectDB } from "@/config/dbConfig";
import { validateTokenAndGetUserId } from "@/helpers/tokenValidation";
import User from "@/models/userModel";
import { NextResponse } from "next/server";


connectDB();

export async function GET(request){

    try {
        const userId = await validateTokenAndGetUserId(request);
        const user = (await User.findById(userId)).isSelected("-password");

        return NextResponse.json({
            data : user,
            message : "current user fetched successfully"
        }, { status : 200 })
    } catch (error) {
        return NextResponse.json({
            data: null,
            message : error.message,
        }, { status: 500 })
    }
}