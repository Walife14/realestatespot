import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <h1>Real Estate Spot</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/listings">Listings</Link>
                </li>
            </ul>
        </nav>
    )
}