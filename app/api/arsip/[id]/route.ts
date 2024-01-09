import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

interface Props{
    params: {id: string}
}

export async function PATCH( request:NextRequest, {params}: Props ){
    const body = await request.json()
    const dokumen = await prisma.dokumen.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!dokumen){
        return NextResponse.json({error: "Dokumen tidak ditemukan"}, {status: 404})
    }

    const updatedDokumen = await prisma.dokumen.update({
        where: {id: dokumen.id},
        data: {
            noDokumen: body.noDokumen,
            npwp: body.npwp,
            namaWp: body.namaWp,
            jenisBerkasId: body.jenisBerkasId,
            noDusId: body.noDusId
        }
    })

    return NextResponse.json(updatedDokumen)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const dokumen = await prisma.dokumen.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!dokumen){
        return NextResponse.json({error: "Dokumen tidak ditemukan"}, {status: 404})
    }

    const deletedDokumen = await prisma.dokumen.delete({
        where: {id: dokumen.id}
    })

    return NextResponse.json(deletedDokumen)
}