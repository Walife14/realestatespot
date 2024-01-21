import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import { notFound } from "next/navigation";

import type { Listing } from "../ListingList";

// components
import DeleteButton from "./DeleteButton";

// images
import Image from "next/image";
import House from '../house.png'

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { id: string }}) {
    const supabase = createServerComponentClient({cookies })

    const { data: listing } = await supabase.from('listings')
        .select()
        .eq('id', params.id)
        .single()

    return {
        title: `Real Estate Spot | Property in ${listing?.road || 'Listing not found'}`
    }
}

async function getListing(id: string) {
    const supabase = createServerComponentClient({cookies })

    const { data } = await supabase.from('listings')
        .select()
        .eq('id', id)
        .single()
    
    if (!data) {
        notFound()
    }

    return data
}

export default async function Listing({ params }: { params: { id: string}}) {
    const listing: Listing = await getListing(params.id)

    const supabase = createServerComponentClient({ cookies })

    const { data } = await supabase.auth.getSession()

    return (
        <main>
            <nav>
                <h2>Listing details</h2>
                <div className="ml-auto">
                    {data.session?.user.email === listing.user_email && (
                        <DeleteButton id={listing.id} />
                    )}
                </div>
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