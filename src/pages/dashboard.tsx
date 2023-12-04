import { Icons } from "@/components/icons";
import { cn, getMemData } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

function NavItems({
  title,
  items,
}: {
  title: string;
  items: { title: string }[];
}) {
  return (
    <div>
      <h3 className="h-9 pb-2 pt-3 px-3 text-xs font-medium text-ellipsis overflow-hidden break-all text-gray-500">
        {title}
      </h3>

      {items.map((item, index) => {
        return (
          <Link key={index} to={"/"}>
            <span
              className={cn(
                "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#202122] hover:text-accent-foreground"
                // path === item.href ? "bg-accent" : "transparent",
                // item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              <span>{item.title}</span>
              <Icons.lock className="mr-2 h-4 w-4" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function MessageTile({
  img,
  name,
  content,
  blur = false,
}: {
  img: string;
  name: string;
  content: string;
  blur?: boolean;
}) {
  return (
    <div className={cn("flex items-center", blur && "blur-sm")}>
      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
        <AvatarImage src={img} alt="Avatar" />
        <AvatarFallback>XX</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Hello",
  },
  {
    title: "Hola",
  },
  {
    title: "Nameste",
  },
];

const messages = [
  {
    img: "/vite.svg",
    name: "spyderweb",
    content: "Test Message",
  },
  {
    img: "/vite.svg",
    name: "spyderweb",
    content: "Test Message",
  },
  {
    img: "/vite.svg",
    name: "spyderweb",
    content: "Test Message",
  },
];

function DashboardPage() {
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
    <div className="flex bg-[#343541] h-screen">
      <div className="w-[400px] bg-[#000000] h-full">
        <nav className="p-4 h-full flex flex-col">
          <div className="flex flex-col flex-1 gap-2 gap-y-6 overflow-auto">
            <div>
              <Link to={"/"}>
                <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#202122] hover:text-accent-foreground">
                  <Icons.dashboard className="mr-2 h-6 w-6" />
                  <span>Transaction IDs</span>
                </span>
              </Link>
            </div>

            <NavItems title="Previous 7 Days" items={items} />
            <NavItems title="Previous 14 Days" items={items} />
          </div>

          <div>
            <Link to={"/"}>
              <span className="group flex items-center rounded-md px-3 py-2 gap-4 text-sm font-medium hover:bg-[#202122] hover:text-accent-foreground">
                {/* <Icons.dashboard className="mr-2 h-6 w-6" /> */}

                <Avatar className="flex h-8 w-8 items-center justify-center space-y-0 border">
                  <AvatarImage src="/vite.svg" alt="Avatar" />
                  <AvatarFallback>XX</AvatarFallback>
                </Avatar>

                <span>Transaction IDs</span>
              </span>
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex flex-col justify-between h-full w-full p-4">
        <h1 className="text-4xl font-bold">Baldr</h1>

        <div className="flex flex-col flex-grow gap-8 mt-16 w-3/5 mx-auto">
          {messages.map((message) => (
            <MessageTile {...message} />
          ))}
        </div>

        <div className="w-3/5 mx-auto pt-8">
          <p className="h-10 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-2 text-sm ring-offset-background text-muted-foreground">
            Hello, I'm under the water, please help.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
