import prisma from "@/app/lib/db";
import { useCountries } from "@/app/lib/getCountries";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import ProfileImage from "@/public/images/profile-image.png";
import { Separator } from "@/components/ui/separator";
import CategoryShowcase from "@/app/components/CategoryShowcase";
import HomeMap from "@/app/components/HomeMap";
import SelectCalender from "@/app/components/SelectCalender";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createReservation } from "@/app/actions";
import { ReservationSubmitButton } from "@/app/components/SubmitButtons";
import { unstable_noStore as noStore } from "next/cache";

async function getData(homeId: string) {
  noStore();
  const data = await prisma.home.findUnique({
    where: {
      id: homeId,
    },
    select: {
      photo: true,
      description: true,
      guests: true,
      bedrooms: true,
      bathrooms: true,
      title: true,
      categoryName: true,
      price: true,
      country: true,
      Reservation: {
        where: {
          homeId: homeId,
        },
      },
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-[70%] mx-auto mt-10 mb-12">
      <h1 className="font-medium text-2xl text-[#ff385c] mb-5">
        {data?.title}
      </h1>
      <div className="relative h-[500px]">
        <Image
          src={`https://azmboyaymbixlhjcawky.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          alt="Image of Home"
          fill
          className="rounded-lg h-full w-full object-cover"
          priority
        />
      </div>
      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label}, {country?.region}
          </h3>
          <div className="flex items-center gap-x-2 text-muted-foreground">
            <p>{data?.guests} Guests</p> <VscDebugBreakpointLog />{" "}
            <p>{data?.bedrooms} Bedrooms</p> <VscDebugBreakpointLog />{" "}
            {data?.bathrooms} Bathrooms
          </div>
          <div className="flex items-center mt-6">
            <Image
              src={data?.User?.profileImage ?? ProfileImage}
              alt="profile image"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium">Hosted by {data?.User?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Host since 2023</p>
            </div>
          </div>

          <Separator className="my-7" />

          <CategoryShowcase categoryName={data?.categoryName as string} />

          <Separator className="my-5" />

          <p className="text-muted-foreground">{data?.description}</p>

          <Separator className="my-7" />

          <HomeMap locationValue={country?.value as string} />
        </div>
        <form action={createReservation}>
          <input type="hidden" name="homeId" value={params.id} />
          <input type="hidden" name="userId" value={user?.id} />
          <SelectCalender reservation={data?.Reservation} />
          {user?.id ? (
            <ReservationSubmitButton />
          ) : (
            <Button className="w-full" asChild>
              <Link href="/api/auth/login">Make a Reservation</Link>
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
