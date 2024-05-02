import { FaSearch } from "react-icons/fa";

export default function SearchNav() {
  return (
    <div className="flex items-center justify-center border-[1px] py-2 shadow-md rounded-full transition cursor-pointer hover:bg-neutral-200 gap-3">
      <div className="flex items-center justify-center divide-x">
        <div className="text-sm font-medium px-6 hover:text-[#ff385c]">
          Anywhere
        </div>
        <div className="text-sm font-medium px-6 hidden sm:block hover:text-[#ff385c]">
          Any Week
        </div>
        <div className="text-sm font-medium px-6 hidden sm:block text-gray-500">
          Add Guests
        </div>
      </div>

      <div className="bg-[#ff385c] rounded-full text-white p-2 mx-2">
        <FaSearch className="w-5 h-5" />
      </div>
    </div>
  );
}
