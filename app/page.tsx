import React from "react";

const page = () => {
  return (
    <div className="w-[100%] flex justify-center items-center h-screen bg-slate-400">
      <div className="grid grid-rows-[100px_150px_150px_100px] grid-cols-3 gap-2 w-[90%]">
        <div className="bg-purple-200 text-black col-span-3 text-center font-bold content-center border border-black rounded-sm transition-all duration-300 ease-out hover:scale-105">
          Header 1
        </div>
        <div className="bg-pink-500 text-black row-span-2 text-center font-bold content-center border border-black rounded-sm transition-all duration-300 ease-out hover:scale-105">
          Sidebar
        </div>
        <div className="bg-yellow-50 text-black col-span-2 text-center font-bold content-center border border-black rounded-sm transition-all duration-300 ease-out hover:scale-105">
          Contant-1
        </div>
        <div className="bg-pink-200 text-black text-center font-bold content-center border border-black rounded-sm transition-all duration-300 ease-out hover:scale-105">
          Contant-2
        </div>
        <div className="bg-purple-300 text-black text-center font-bold content-center border border-black rounded-sm transition-all duration-300 ease-out hover:scale-105">
          Contant-3
        </div>
        <div className="bg-yellow-300 text-black col-span-3 text-center font-bold content-center border border-black rounded-sm transition-all duration-300 ease-out hover:scale-105">
          Footer
        </div>
      </div>
    </div>
  );
};

export default page;
