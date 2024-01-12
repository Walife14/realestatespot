import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Home</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, hic unde delectus, excepturi non eveniet laboriosam vero numquam, impedit amet nemo obcaecati quis fuga reiciendis?</p>
    
      <div className="flex justify-center my-8">
        <Link href="/listings">
          <button className="btn-primary">View Listings</button>
        </Link>
      </div>

      <h2>Real Estate Spot Updates</h2>

      <div className="card">
        <h3>New website!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptas?</p>
      </div>
      <div className="card">
        <h3>Website live!</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quia provident doloribus vero. Accusantium, labore. Dignissimos veritatis laboriosam necessitatibus consequuntur!</p>
      </div>
    </main>
  )
}