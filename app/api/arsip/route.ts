import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const allDokumen = await prisma.dokumen.findMany()

    return NextResponse.json(allDokumen)
}

export async function POST (request: NextRequest){
    const body = await request.json()
    
    const newDokumen = await prisma.dokumen.create({
        data: {
            noDokumen: body.noDokumen,
            npwp: body.npwp,
            namaWp: body.namaWp,
            jenisBerkasId: body.jenisBerkasId,
            noDusId: body.noDusId
        }
    })
    return NextResponse.json(newDokumen, {status: 201})
}