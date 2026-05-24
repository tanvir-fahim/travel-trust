'use client';
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user);
    return (
        <nav className="bg-white shadow flex items-center justify-between p-5">
            <ul className="flex space-x-4 flex-1">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/bookings">My Bookings</Link></li>
                <li><Link href="/add-destination">Add Destination</Link></li>
            </ul>

            <div className="flex-1 text-center">
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">TravelTrust</h1>
            </div>

            <ul className="flex space-x-4 flex-1 justify-end items-center">
                <li><Link href="/profile">Profile</Link></li>
                {user ? (
                    <>
                        <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <li><Link href="/logout"><Button variant="danger">Logout</Button></Link></li>
                    </>
                ) : (
                    <>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">Sign Up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;