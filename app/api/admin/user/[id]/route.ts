import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

interface Props{
    params: {id: string}
}

export async function PATCH( request:NextRequest, {params}: Props ){
    const body = await request.json()
    const user = await prisma.user.findUnique({
        where: {id: params.id}
    })

    if(!user){
        return NextResponse.json({error: "User tidak ditemukan"}, {status: 404})
    }

    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            username: body.username,
            password: body.password,
            role: body.role
        }
    })

    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const user = await prisma.user.findUnique({
        where: {id: params.id}
    })

    if(!user){
        return NextResponse.json({error: "User tidak ditemukan"}, {status: 404})
    }

    const deletedUser = await prisma.user.delete({
        where: {id: user.id}
    })

    return NextResponse.json(deletedUser)
}