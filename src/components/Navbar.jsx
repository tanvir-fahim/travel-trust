import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white shadow flex items-center justify-between p-5">
            <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/bookings">My Bookings</Link></li>
            </ul>

            <div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">TravelTrust</h1>
            </div>

            <ul className="flex space-x-4">
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;