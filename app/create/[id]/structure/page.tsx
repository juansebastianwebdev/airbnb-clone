import { createCategoryPage } from "@/app/actions";
import CreationButton from "@/app/components/CreationButton";
import SelectedCategory from "@/app/components/SelectedCategory";

export default function StructureRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-[80%] md:w-[70%] lg:w-[75%] xl:w-[60%] mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your Home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectedCategory />
        <CreationButton />
      </form>
    </>
  );
}
