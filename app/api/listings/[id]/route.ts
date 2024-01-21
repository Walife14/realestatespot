import { NextResponse } from "next/server"

// means it would re-run from scratch whenever a new request comes in
export const dynamic = 'force-dynamic'

export async function GET(_: any, { params }: any) {
    const { id } = params

    const res = await fetch(`http://localhost:4000/listings/${id}`)

    if (!res.ok) {
        return NextResponse.json({error: 'Cannot find listing'}, {
            status: 404
        })
    }

    const listing = await res.json()

    return NextResponse.json(listing, {
        status: 200
    })
}