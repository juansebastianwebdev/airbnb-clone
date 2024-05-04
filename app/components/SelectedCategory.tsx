"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryList } from "../lib/categoryList";
import Image from "next/image";
import { useState } from "react";

export default function SelectedCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-[80%] md:w-[70%] lg:w-[75%] xl:w-[60%] mx-auto mb-32">
      <input
        type="hidden"
        name="categoryName"
        value={selectedCategory}
      />
      {categoryList.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={`
            border-2 border-neutral-100 bg-neutral-100
            ${selectedCategory === item.name ? "border-[#ff585c]" : ""}
            ${selectedCategory === item.name ? "" : "hover:scale-110"}          
            `}
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.image}
                alt={item.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
