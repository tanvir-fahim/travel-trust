import { Card, CardHeader } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin, LuClock, LuTag } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, category, description, price, imageUrl, duration } = destination;

    return (
        <Card className="p-4 shadow-md bg-white dark:bg-zinc-900 flex flex-col justify-between h-full">
            <div>
                <div className="w-full h-50 relative overflow-hidden rounded-xl">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 350px"
                    />

                    <span className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm text-foreground">
                        <LuTag className="w-3 h-3 text-primary" />
                        {category}
                    </span>
                </div>

                <CardHeader className="flex-col items-start px-1 pt-4 pb-2">
                    <div className="flex items-center gap-1.5 text-xs text-default-400 font-medium">
                        <LuClock className="w-3.5 h-3.5" />
                        <span>{duration}</span>
                    </div>
                    <h4 className="font-bold text-xl mt-1.5 text-foreground leading-tight">{destinationName}</h4>
                    <div className="flex items-center gap-1 mt-1 text-default-500">
                        <LuMapPin className="w-4 h-4 text-danger" />
                        <span className="text-small">{country}</span>
                    </div>
                </CardHeader>

                <div className="px-1 py-2">
                    <p className="text-default-600 text-sm line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            <div className="px-1 pt-4 mt-2 border-t border-default-100 flex justify-between items-center">
                <div>
                    <span className="text-2xl font-bold text-foreground">${price}</span>
                    <span className="text-xs text-default-400 ml-1">/ person</span>
                </div>
                <div>
                    <Link href={`/destinations/${_id}`}>
                        <button className="bg-primary text-blue-500 font-bold px-2 rounded-lg hover:underline flex items-center gap-1 text-lg">
                            <FiExternalLink /> Book Now
                        </button>
                    </Link>
                </div>
            </div>

        </Card>
    );
};

export default DestinationCard;