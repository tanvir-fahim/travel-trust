import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destinations');
    const destinations = await res.json();

    // console.log("Fetched Destinations:", destinations);

    return (
        <div className="max-w-7xl mx-auto my-10">
            <h1 className="text-2xl font-bold mb-4">Explore All Destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    destinations.map(dest => <DestinationCard key = {dest._id} destination = {dest}/>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;