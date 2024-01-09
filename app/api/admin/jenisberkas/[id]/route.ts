import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

interface Props{
    params: {id: string}
}

export async function PATCH( request:NextRequest, {params}: Props ){
    const body = await request.json()
    const jenisBerkas = await prisma.jenisBerkas.findUnique({
        where: {id: params.id}
    })

    if(!jenisBerkas){
        return NextResponse.json({error: "Jenis Berkas tidak ditemukan"}, {status: 404})
    }

    const updatedJenisBerkas = await prisma.jenisBerkas.update({
        where: {id: jenisBerkas.id},
        data: {
            nama: body.nama,
        }
    })

    return NextResponse.json(updatedJenisBerkas)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const jenisBerkas = await prisma.jenisBerkas.findUnique({
        where: {id: params.id}
    })

    if(!jenisBerkas){
        return NextResponse.json({error: "Jenis Berkas tidak ditemukan"}, {status: 404})
    }

    const deletedJenisBerkas = await prisma.jenisBerkas.delete({
        where: {id: jenisBerkas.id}
    })

    return NextResponse.json(deletedJenisBerkas)
}