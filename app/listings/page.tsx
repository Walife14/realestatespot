import { Suspense } from "react";
import { Metadata } from "next";
import ListingList from "./ListingList";
import Loading from "../loading";

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
      </nav>

      <Suspense fallback={<Loading />}>
        <ListingList />
      </Suspense>
    </main>
  )
}