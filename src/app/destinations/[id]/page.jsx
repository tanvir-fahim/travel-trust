import Image from "next/image";
import { LuClock, LuMapPin, LuTag } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`);

    const destination = await res.json();
    const { _id, destinationName, country, category, description, price, imageUrl, duration } = destination;

    // console.log("Destination Details:", destination);
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md flex justify-center items-start gap-6 my-8">
            <div className="w-full h-96 relative overflow-hidden rounded-lg mb-6">
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    height={400}
                    width={800}
                />
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full flex flex-col">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-4">{destinationName}</h1>
                    <p className="mb-2">{description}</p>
                    <p className="flex items-center gap-1"><LuMapPin className="w-4 h-4 text-danger" /> <span className="font-semibold">Country: </span> {country}</p>
                    <p className="flex items-center gap-1"><LuTag className="w-4 h-4 text-blue-500" /> <span className="font-semibold">Category: </span> {category}</p>
                    <p className="flex items-center gap-1"><LuClock className="w-4 h-4 text-green-500" /> <span className="font-semibold">Duration: </span> {duration}</p>
                </div>

                <div className="mt-4">
                    <p><span className="font-semibold">Price:</span> ${price.toFixed(2)}/<small>person</small></p>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;