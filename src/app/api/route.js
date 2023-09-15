import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";


// call out
connectDB();

export async function GET() {
    return NextResponse.json({ data : "Home Route testing" }, { status: 200 });
}