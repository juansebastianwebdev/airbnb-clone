"use client";

import { useCountries } from "@/app/lib/getCountries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";

export default function AddressRoute() {
  const { getAllCountries } = useCountries();

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
          Where is your Home located?
        </h2>
      </div>

      <form action="">
        <div className="w-3/5 mx-auto mb-36">
          <div className="mb-5">
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((countries: any) => (
                    <SelectItem key={countries.value} value={countries.value}>
                      <div className="flex items-center gap-x-1">
                        <div>{countries.flag}</div>
                        <div className="font-medium flex gap-x-1">
                          {countries.label},
                          <span className="text-neutral-500">
                            {countries.region}
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </>
  );
}
