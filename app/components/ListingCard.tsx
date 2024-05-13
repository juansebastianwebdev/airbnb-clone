import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";
import { AddFavoriteButton, DeleteFavoriteButton } from "./SubmitButtons";
import { DeleteFromFavorite, addToFavorite } from "../actions";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

export default function ListingCard({
  description,
  imagePath,
  location,
  price,
  userId,
  isFavoriteList,
  favoriteId,
  homeId,
  pathName,
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

        {userId && (
          <div className="z-10 absolute top-3 right-3">
            {isFavoriteList ? (
              <form action={DeleteFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>

      <Link href={`/home/${homeId}`} className="mt-2">
        <div className="flex items-center gap-x-2">
          {country?.flag}
          <div className="flex gap-x-1 font-semibold">
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
        <h3 className="font-semibold flex gap-x-1">
          ${price}
          <span className="font-normal">Night</span>
        </h3>
      </Link>
    </div>
  );
}
