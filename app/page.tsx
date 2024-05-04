import Categories from "./components/Categories";
import ListingCard from "./components/ListingCard";
import prisma from "./lib/db";

async function getData() {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLoaction: true,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="mx-auto px-5 lg:px-10">
      <Categories />

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data.map((item) => (
          <ListingCard
            key={item.id}
            description={item.description as string}
            imagePath={item.photo as string}
            location={item.country as string}
            price={item.price as number}
          />
        ))}
      </div>
    </div>
  );
}
