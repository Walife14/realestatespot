import { NextResponse } from "next/server"

// means it would re-run from scratch whenever a new request comes in
export const dynamic = 'force-dynamic'

export async function GET() {
    const res = await fetch('http://localhost:4000/listings')

    const listings = await res.json()

    return NextResponse.json(listings, {
        status: 200
    })
}

export async function POST(request: Request) {
    const listing = await request.json()

    const res = await fetch('http://localhost:4000/listings', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(listing)
    })

    const newListing = await res.json()

    return NextResponse.json(newListing, {
        status: 201
    })
}