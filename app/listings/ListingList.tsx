import Image from "next/image";
import Link from "next/link"
import House from "./house.png"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

async function getListings() {
    const supabase = createServerComponentClient({ cookies })

    const { data, error } = await supabase.from('listings')
        .select()

    if (error) {
        console.log(error)
    }

    return data!
}

export interface Listing {
    id: string;
    road: string;
    post_code: string;
    city: string;
    country: string;
    body: string;
    user_email: string;
    monthly: number;
    images: Image[];
}

export interface Image {
    id: string;
    property_id: string; // FK
    url: string;
}

export default async function ListingList() {
    const listings: Listing[] = await getListings()

    return (
        <>
            {listings.map((listing: Listing) => (
                <div key={listing.id} className="card my-5">
                    <Link href={`/listings/${listing.id}`}>
                        <Image
                            src={House}
                            alt={`Image of house at ${listing.road} in ${listing.city}`}
                            placeholder="blur"
                            quality={100}
                        />
                        <p>{listing.road}, {listing.city}, {listing.country}.</p>
                        <div className="pill">
                            £{listing.monthly} Monthly
                        </div>
                    </Link>
                </div>
            ))}
            {listings.length === 0 && (
                <p className="text-center">We cannot find any listings!</p>
            )}
        </>
    )
}