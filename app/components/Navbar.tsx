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
                {!user && (
                    <li>
                        <Link href="/auth/login">Login</Link>
                    </li>  
                )}
                {!user && (
                    <li>
                        <Link href="/auth/register">Register</Link>
                    </li>  
                )}
                {user && (
                    <li>
                        <Link href="/my-listings">My Listings</Link>
                    </li>  
                )}
            </ul>
            {user && (
                <div className="flex items-center justify-between mt-1">
                    <span>Hello, {user.email}</span>
                    <LogoutButton />
                </div>
            )}
        </nav>
    )
}