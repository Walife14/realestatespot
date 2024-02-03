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
        <p>We&#39;re putting Real Estate Spot live for private landlords to advertise their 
          properties! Real Estate Spot the platform you can advertise your own private property or view properties 
          private landlords have on our platform.</p>
      </div>
      <div className="card">
        <h3>Image uploading on new listing!</h3>
        <p>You can now add your property images to your listing!</p>
      </div>
    </main>
  )
}