import Image from "next/image";
import House from './house.png'

async function getListings() {
    const res = await fetch('http://localhost:4000/listings', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

interface Listing {
    id: string;
    road: string;
    post_code: string;
    city: string;
    country: string;
    body: string;
    user_email: string;
    monthly: number;
}

export default async function ListingList() {
    const listings: Listing[] = await getListings()
    console.log(listings)

    return (
        <>
            {listings.map((listing: Listing) => (
                <div key={listing.id} className="card my-5">
                    <Image
                        src={House}
                        alt={`Image of house at ${listing.road} in ${listing.city}`}
                        placeholder='blur'
                        quality={100}
                    />
                    <p>{listing.road}, {listing.city}, {listing.country}.</p>
                    <div className="pill">
                        £{listing.monthly} Monthly
                    </div>
                </div>
            ))}
            {listings.length === 0 && (
                <p className="text-center">We can't finy any listings!</p>
            )}
        </>
    )
}