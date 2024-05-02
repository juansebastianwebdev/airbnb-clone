"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Counter({ name }: { name: string }) {
  const [count, setCount] = useState(0);

  function increasee() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex items-center gap-x-4">
      <input type="hidden" name={name} value={count} />
      <Button variant="outline" size="sm" type="button" onClick={decrease}>
        <FaMinus className="w-4 h-4 text-[#ff385c]" />
      </Button>
      <span className="font-medium text-lg">{count}</span>
      <Button variant="outline" size="sm" type="button" onClick={increasee}>
        <FaPlus className="w-4 h-4 text-[#ff385c]" />
      </Button>
    </div>
  );
}
