import ListingList from "./ListingList";

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Listings</h2>
          <p><small>Currently available properties.</small></p>
        </div>
      </nav>

      <ListingList />
    </main>
  )
}