import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
}

export default function ListingCard({
  description,
  imagePath,
  location,
  price,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://azmboyaymbixlhjcawky.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover"
          sizes="(max-width: 600px) 100vw, 600px"
          priority
        />
      </div>

      <Link href={"/"}>
        <div className="flex items-center gap-x-2">
          {country?.flag}
          <div className="flex gap-x-1 font-medium">
            <div className="text-[#ff385c]">
              {country?.label}
              <span className="text-black">,</span>
            </div>
            {country?.region}
          </div>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <h3 className="font-medium">${price} Night</h3>
      </Link>
    </div>
  );
}
