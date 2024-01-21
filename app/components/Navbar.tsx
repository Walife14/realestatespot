import Link from 'next/link'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }: any) {
    return (
        <nav>
            <h1>Real Estate Spot</h1>
            <ul className="w-full overflow-hidden flex-wrap">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/listings">Listings</Link>
                </li>
                <li>
                    {user && <span>Hello, {user.email}</span>}
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    )
}