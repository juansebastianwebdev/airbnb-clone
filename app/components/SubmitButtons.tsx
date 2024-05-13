"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { LuLoader } from "react-icons/lu";
import { GoHeartFill } from "react-icons/go";

export default function SubmitButtons() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg">
          <LuLoader className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit" size="lg">
          Next
        </Button>
      )}
    </>
  );
}

export function AddFavoriteButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground/70 hover:bg-primary-foreground/90  border-0"
          disabled
        >
          <LuLoader size={24} className="animate-spin text-[#ff385c]" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground/70 hover:bg-primary-foreground/90  border-0"
          type="submit"
        >
          <GoHeartFill
            size={24}
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
          />
        </Button>
      )}
    </>
  );
}

export function DeleteFavoriteButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground/70 hover:bg-primary-foreground/90  border-0"
          disabled
        >
          <LuLoader size={24} className="animate-spin text-[#ff385c]" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="bg-primary-foreground/70 hover:bg-primary-foreground/90  border-0"
          type="submit"
        >
          <GoHeartFill size={24} className="text-[#ff385c]" fill="#ff385c" />
        </Button>
      )}
    </>
  );
}

export function ReservationSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <LuLoader size={24} className="animate-spin text-[#ff385c] mr-2" />{" "}
          Please wait...
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          Make a Reservation!
        </Button>
      )}
    </>
  );
}
