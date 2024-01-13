import { notFound } from "next/navigation";
import Image from "next/image";
import House from '../house.png'
import type { Listing } from "../ListingList";

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/listings')

    const listings = await res.json()

    return listings.map((listing: Listing) => ({
        id: listing.id
    }))
}

async function getListing(id: string) {
    const res = await fetch('http://localhost:4000/listings/' + id, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export default async function Listing({ params }: { params: { id: string}}) {
    const listing: Listing = await getListing(params.id)

    return (
        <main>
            <nav>
                <h2>Listing details</h2>
            </nav>
            <div className="card">
                {/* image */}
                <Image
                    src={House}
                    alt={`Image of house at ${listing.road} in ${listing.city}`}
                    placeholder='blur'
                    quality={100}
                />
                {/* address */}
                <p>{listing.road}, {listing.city}, {listing.country}</p>
                {/* body */}
                <div>
                    <p>{listing.body}</p>
                </div>
                {/* created by */}
                <small>Created by {listing.user_email}</small>
            </div>
        </main>
    )
}