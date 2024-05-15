import { MdOutlineSubtitlesOff } from "react-icons/md";

interface iAppProps{
  title: string,
  description: string,
}

export default function NoItmes({description, title} : iAppProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10 mb-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff385c]/30">
        <MdOutlineSubtitlesOff className="h-10 w-10 text-[#ff385c]" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}
