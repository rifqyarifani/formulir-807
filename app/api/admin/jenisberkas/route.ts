import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const allJenisBerkas = await prisma.jenisBerkas.findMany()

    return NextResponse.json(allJenisBerkas)
}

export async function POST (request: NextRequest){
    const body = await request.json()
    
    const newJenisBerkas = await prisma.jenisBerkas.create({
        data: {
            nama: body.nama,
        }
    })
    return NextResponse.json(newJenisBerkas, {status: 201})
}