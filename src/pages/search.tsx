import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { Link } from "react-router-dom";

function SearchPage() {
  const inputRef = useRef(null);

  return (
    <div className="h-screen w-screen flex items-center flex-col py-12">
      <img src="/vite.svg" className="h-10 w-10 rounded-xl" />

      <div className="flex flex-col gap-16 w-[800px] flex-grow justify-center">
        <h1 className="text-7xl text-center">Temple of Baldr</h1>

        <div className="w-1/2 mx-auto flex flex-col gap-8">
          <Input placeholder="Search by username" ref={inputRef} />

          <Link to="/dashboard" className="w-full">
            <Button className="w-full">Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
