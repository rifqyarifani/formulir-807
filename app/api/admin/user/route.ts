import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const allUser = await prisma.user.findMany()

    return NextResponse.json(allUser)
}

export async function POST (request: NextRequest){
    const body = await request.json()

    const {username, password, role} = body

    const existingUser = await prisma.user.findUnique({
        where: {username: username}
    })

    if(existingUser){
        return NextResponse.json({message: "User sudah terdaftar"}, {status: 403})
    }

    
    const newUser = await prisma.user.create({
        data: {
            username,
            password,
            role
        }
    })
    return NextResponse.json(newUser, {status: 201})
}