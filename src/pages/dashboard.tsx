import { Icons } from "@/components/icons";
import { cn, expandTxnData, getMemData } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { TxnData } from "@/types";
import { Button } from "@/components/ui/button";

function NavItems({
  title,
  items,
  activeTxn = null,
  onClick,
}: {
  title: string;
  items: { title: string }[];
  activeTxn?: string | null;
  onClick: (val: string) => void;
}) {
  return (
    <div>
      <h3 className="h-9 pb-2 pt-3 px-3 text-xs font-medium text-ellipsis overflow-hidden break-all text-gray-500">
        {title}
      </h3>

      <div className="flex flex-col gap-1">
        {items.map((item, index) => {
          return (
            <div onClick={() => onClick(item.title)} key={index}>
              <span
                className={cn(
                  "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#202122] hover:text-accent-foreground",
                  activeTxn === item.title ? "bg-accent" : "transparent"
                )}
              >
                <span className="break-all w-[90%] truncate">{item.title}</span>

                <Icons.lock className="mr-2 h-4 w-4" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MessageTile({ img, txnData }: { img: string; txnData: TxnData }) {
  const data = expandTxnData(txnData);

  return (
    <div className={cn("flex items-center", data.isPrivate && "blur-sm")}>
      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
        <AvatarImage src={img} alt="Avatar" />
        <AvatarFallback>XX</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{data.username}</p>
        <p className={cn("text-sm text-muted-foreground")}>{data.content}</p>
      </div>
    </div>
  );
}

function DashboardPage() {
  const [params] = useSearchParams();

  const [txns, setTxns] = useState<string[]>([]);
  const [activeTxn, setActiveTxn] = useState<string | null>(null);
  const [activeTxnData, setActiveTxnData] = useState<TxnData[] | null>(null);

  const [privateTxnData, setPrivateTxnData] = useState<{
    isPrivate: boolean;
    key: string | null;
  } | null>(null);

  const username = params.get("username");

  useEffect(() => {
    async function getData() {
      if (!username) return;

      const data = await getMemData();

      setTxns(data.tnxs[username] ?? []);
      setActiveTxn(data.tnxs[username][0] ?? null);
    }

    getData();
  }, [username]);

  useEffect(() => {
    async function getTnxData(txn: string): Promise<TxnData[]> {
      const resp = await fetch(`https://arweave.net/${txn}`);
      const data = (await resp.json()) as TxnData[];

      setActiveTxnData(data);

      if (data[0]) {
        const pvtData = expandTxnData(data[0]);

        setPrivateTxnData({
          key: pvtData.key,
          isPrivate: pvtData.isPrivate,
        });
      }

      return data;
    }

    if (!activeTxn) {
      return;
    }

    getTnxData(activeTxn);
  }, [activeTxn]);

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

            <NavItems
              title="Transaction IDs"
              items={txns.map((txn) => ({
                title: txn,
              }))}
              onClick={setActiveTxn}
              activeTxn={activeTxn}
            />
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

        <div className="relative flex-grow w-3/5 mx-auto mt-16">
          <div
            className={cn(
              "flex flex-col flex-grow gap-8",
              privateTxnData?.isPrivate
            )}
          >
            {activeTxnData?.map((txnData, i) => (
              <MessageTile key={i} img="/vite.svg" txnData={txnData} />
            ))}
          </div>

          {privateTxnData?.isPrivate && (
            <Button
              variant="outline"
              className="absolute m-auto left-0 right-0 top-0 bottom-0 w-min blur-0 z-1"
            >
              View Data
            </Button>
          )}
        </div>

        <div className="w-3/5 mx-auto pt-8">
          <p className="h-10 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-2 text-sm ring-offset-background text-muted-foreground">
            {activeTxn ? (
              <Link
                to={`https://arweave.net/${activeTxn}`}
                className="underline"
                target="_blank"
              >
                {activeTxn}
              </Link>
            ) : (
              "Transaction ID's block explorer link will appear here"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
