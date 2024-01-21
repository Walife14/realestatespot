import { Suspense } from "react";
import { Metadata } from "next";
import ListingList from "./ListingList";
import Loading from "../loading";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Real Estate Spot | Listings',
}

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Listings</h2>
          <p><small>Currently available properties.</small></p>
        </div>
        <Link href="/listings/create" className="ml-auto">
          <button className="btn-primary">New Listing</button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <ListingList />
      </Suspense>
    </main>
  )
}