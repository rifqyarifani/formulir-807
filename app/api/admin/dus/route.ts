import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const allDus = await prisma.dus.findMany()

    return NextResponse.json(allDus)
}

export async function POST (request: NextRequest){
    const body = await request.json()
    
    const newDus = await prisma.dus.create({
        data: {
            noDus: body.noDus,
            noRak: body.noRak
        }
    })
    return NextResponse.json(newDus, {status: 201})
}