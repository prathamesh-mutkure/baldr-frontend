import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getMemData } from "@/lib/utils";

function SearchPage() {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function getData() {
      const data = await getMemData();

      setUsernames(Object.keys(data.tnxs));
    }

    getData();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center flex-col py-12">
      <img src="/vite.svg" className="h-10 w-10 rounded-xl" />

      <div className="flex flex-col gap-16 w-[800px] flex-grow justify-center">
        <h1 className="text-7xl text-center">Temple of Baldr</h1>

        <div className="w-1/2 mx-auto flex flex-col gap-8">
          <Select value={username} onValueChange={setUsername}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Search Username" />
            </SelectTrigger>

            <SelectContent className="w-full">
              {usernames.map((item, i) => (
                <SelectItem key={i} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Link
            to={username ? `/dashboard/?username=${username}` : "/dashboard"}
            className="w-full"
          >
            <Button className="w-full">Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
