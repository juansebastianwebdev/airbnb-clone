"use client";

import Link from "next/link";
import { categoryList } from "../lib/categoryList";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export default function Categories() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pahtname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="flex gap-x-12 mt-5 mb-4 w-full">
        {categoryList.map((item) => (
          <Link
            key={item.id}
            href={pahtname + "?" + createQueryString("filter", item.name)}
            className={cn(
              search === item.name
                ? "border-b-2 border-black pb-2 flex-shrink-0"
                : "opacity-70 flex-shrink-0",
              "flex flex-col items-center gap-y-2 hover:border-b-2 hover:border-slate-500"
            )}
          >
            <div className="relative w-6 h-6">
              <Image
                src={item.image}
                alt="Category image"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-sm font-medium">{item.title}</h3>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
