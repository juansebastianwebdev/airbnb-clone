"use server";

import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { supabase } from "./lib/supabase";

export async function createAirbnbHome({ userId }: { userId: string }) {
  const data = await prisma.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/structure`);
  } else if (
    !data.addedCategory &&
    !data.addedDescription &&
    !data.addedLoaction
  ) {
    return redirect(`/create/${data.id}/structure`);
  } else if (data.addedCategory && !data.addedDescription) {
    return redirect(`/create/${data.id}/description`);
  } else if (
    data.addedCategory &&
    data.addedDescription &&
    !data.addedLoaction
  ) {
    return redirect(`/create/${data.id}/address`);
  } else if (
    data.addedCategory &&
    data.addedDescription &&
    data.addedLoaction
  ) {
    const data = await prisma.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create/${data.id}/structure`);
  }
}

export async function createCategoryPage(formData: FormData) {
  const categoryName = formData.get("categoryName") as string;
  const homeId = formData.get("homeId") as string;
  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      categoryName: categoryName,
      addedCategory: true,
    },
  });

  return redirect(`/create/${homeId}/description`);
}

export async function CreateDescription(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price");
  const image = formData.get("image") as File;
  const homeId = formData.get("homeId") as string;

  const guestsNumber = formData.get("guests") as string;
  const roomsNumber = formData.get("rooms") as string;
  const bathroomsNumber = formData.get("bathrooms") as string;

  const { data: imageData } = await supabase.storage
    .from("images")
    .upload(`${image.name}-${new Date().getTime()}`, image, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      title: title,
      description: description,
      price: Number(price),
      bedrooms: roomsNumber,
      bathrooms: bathroomsNumber,
      guests: guestsNumber,
      photo: imageData?.path,
      addedDescription: true,
    },
  });

  return redirect(`/create/${homeId}/address`);
}

export async function createLocation(formData: FormData) {
  const homeId = formData.get("homeId") as string;
  const countryValue = formData.get("countryValue") as string;
  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      addedLoaction: true,
      country: countryValue,
    },
  });

  return redirect("/");
}
