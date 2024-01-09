import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

interface Props{
    params: {id: string}
}

export async function PATCH( request:NextRequest, {params}: Props ){
    const body = await request.json()
    const dus = await prisma.dus.findUnique({
        where: {id: params.id}
    })

    if(!dus){
        return NextResponse.json({error: "Dus tidak ditemukan"}, {status: 404})
    }

    const updatedDus = await prisma.dus.update({
        where: {id: dus.id},
        data: {
            noDus: body.noDus,
            noRak: body.noRak
        }
    })

    return NextResponse.json(updatedDus)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const dus = await prisma.dus.findUnique({
        where: {id: params.id}
    })

    if(!dus){
        return NextResponse.json({error: "Dus tidak ditemukan"}, {status: 404})
    }

    const deletedDus = await prisma.dus.delete({
        where: {id: dus.id}
    })

    return NextResponse.json(deletedDus)
}