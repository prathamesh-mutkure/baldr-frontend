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

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

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

      <div className="flex flex-col gap-16 w-[800px] flex-grow justify-start pt-[10%]">
        <h1 className="text-7xl text-center">Temple of Baldr</h1>

        <div className="w-1/2 mx-auto">
          <Command
            onChange={(e) => {
              setUsername(e.target.value ?? "");
            }}
            className=""
          >
            <CommandInput placeholder="Search username" />
            <CommandList>
              <CommandGroup>
                {username &&
                  usernames.map((item, i) => (
                    <Link
                      to={item ? `/dashboard/?username=${item}` : "/dashboard"}
                      className="w-full"
                    >
                      <CommandItem key={i}>{item}</CommandItem>
                    </Link>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>

          {/* <Link
            to={username ? `/dashboard/?username=${username}` : "/dashboard"}
            className="w-full"
          >
            <Button className="w-full">Continue</Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
