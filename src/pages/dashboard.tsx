import { Icons } from "@/components/icons";
import { cn, expandTxnData, getMemData } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import QRCode from "react-qr-code";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import { TxnData } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import { OthentLogin, ModalLocation } from "@othent/react-components";

dayjs.extend(relativeTime);

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

function MessageTile({
  img,
  txnData,
  dataDecrypted = false,
}: {
  img: string;
  txnData: TxnData;
  dataDecrypted: boolean;
}) {
  const data = expandTxnData(txnData);

  const date = dayjs(data.timestamp);

  return (
    <div className={cn("flex items-center")}>
      <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
        <AvatarImage src={img} alt="Avatar" />
        <AvatarFallback>XX</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-md font-medium leading-none flex flex-row gap-x-2 items-center print:text-black">
          <span className="  font-bold">{data.username}</span>
          <span className="text-muted-foreground"> • </span>
          <span className="text-muted-foreground text-sm print:hidden">
            {date.fromNow()}
          </span>

          <span className="text-muted-foreground text-sm hidden print:block">
            {date.format("DD/MM/YYYY HH:mm:ss")}
          </span>
        </p>
        <p className={cn("text-sm text-muted-foreground print:text-black")}>
          {dataDecrypted ? atob(data.content) : data.content}
        </p>
      </div>
    </div>
  );
}

function DashboardPage() {
  const [params, setParams] = useSearchParams();
  const { toast } = useToast();

  const [txns, setTxns] = useState<string[]>([]);
  const [activeTxnData, setActiveTxnData] = useState<TxnData[] | null>(null);
  const [dataDecrpyted, setDataDecrpyted] = useState(false);

  const [privateTxnData, setPrivateTxnData] = useState<{
    isPrivate: boolean;
    key: string | null;
  } | null>(null);

  const keyInputRef = useRef<HTMLInputElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const username = params.get("username");
  const txId = params.get("txId");

  useEffect(() => {
    async function getData() {
      if (!username) return;

      const data = await getMemData();

      setTxns(data.tnxs[username]?.reverse() ?? []);

      setParams((oldParams) => {
        oldParams.set("txId", data.tnxs[username][0] ?? null);

        return new URLSearchParams(oldParams);
      });
    }

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (!txId) {
      return;
    }

    getTnxData(txId);
    setDataDecrpyted(false);
    setPrivateTxnData(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txId]);

  function handleViewData() {
    const userKey = keyInputRef.current?.value;

    if (userKey === privateTxnData?.key) {
      toast({
        title: "Success",
        description: "The key matched, decrypting data...",
        type: "foreground",
        variant: "default",
      });

      closeBtnRef.current?.click();
      setDataDecrpyted(true);
    } else {
      toast({
        title: "Failed to decrypt",
        description: "The key did not match",
        type: "foreground",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <div className="flex bg-[#343541] h-screen print:h-full">
        <div className="w-[400px] bg-[#000000] h-full print:hidden">
          <nav className="p-4 h-full flex flex-col">
            <div className="flex flex-col flex-1 gap-2 gap-y-6 overflow-auto">
              <div>
                <Link to={"/search"}>
                  <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#202122] hover:text-accent-foreground">
                    <Icons.arrowLeft className="mr-2 h-6 w-6" />
                    <span>Search</span>
                  </span>
                </Link>
              </div>

              <NavItems
                title="Recent Transactions"
                items={txns.map((txn) => ({
                  title: txn,
                }))}
                onClick={(val) => {
                  setParams((oldParams) => {
                    oldParams.set("txId", val);

                    return new URLSearchParams(oldParams);
                  });
                }}
                activeTxn={txId}
              />
            </div>

            <div>
              <Link to={"/"}>
                <span className="group flex items-center rounded-md px-3 py-2 gap-4 text-sm font-medium hover:bg-[#202122] hover:text-accent-foreground">
                  <Avatar className="flex h-8 w-8 items-center justify-center space-y-0 border">
                    <AvatarImage
                      src="/images/app/discord-logo.svg"
                      alt="Avatar"
                    />
                    <AvatarFallback>XX</AvatarFallback>
                  </Avatar>

                  <span className="font-bold text-xl text-lime-400">
                    {username}
                  </span>
                </span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex flex-col justify-between h-full w-full p-4 overflow-auto">
          <header className="flex flex-row justify-between print:justify-center px-8 print:top-0 print:left-0 print:right-0">
            <h1 className="text-3xl print:text-black print:text-7xl font-bold print:text-center">
              Baldr
            </h1>
            <div>
              <Button
                onClick={() => {
                  if (privateTxnData?.isPrivate && !dataDecrpyted) {
                    toast({
                      variant: "destructive",
                      type: "background",
                      title: "Data not decrypted",
                      description: "Please unlock data before printing it",
                    });

                    return;
                  }

                  window.print();
                }}
                className="print:hidden"
              >
                Generate PDF
              </Button>

              <OthentLogin
                location={ModalLocation["top-left"]}
                apiid="YOUR_API_ID"
              />
            </div>
          </header>

          <div className="relative flex-grow w-3/5 mx-auto mt-16">
            <div
              className={cn(
                "flex flex-col flex-grow gap-8 overflow-auto",
                privateTxnData?.isPrivate && !dataDecrpyted && "blur-sm"
              )}
            >
              {activeTxnData?.map((txnData, i) => (
                <MessageTile
                  key={i}
                  img="/images/app/discord-logo.svg"
                  txnData={txnData}
                  dataDecrypted={dataDecrpyted}
                />
              ))}
            </div>

            {privateTxnData?.isPrivate && !dataDecrpyted && (
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="absolute m-auto left-0 right-0 top-0 bottom-0 w-min blur-0 flex gap-2"
                >
                  <span>
                    <Icons.lock className="h-4 w-4" />
                  </span>
                  <span>Unlock Data</span>
                </Button>
              </DialogTrigger>
            )}
          </div>

          <footer className="w-3/5 mx-auto pt-8 flex flex-col gap-2 max-h-56 print:w-full print:fixed print:bottom-0 print:left-0 print:right-0">
            <div
              className={cn(
                "hidden print:flex flex-row gap-4 items-center w-full",
                privateTxnData?.isPrivate && "justify-between"
              )}
            >
              <QRCode
                value={`${window.location.origin}/#/${txId}`}
                className="max-h-32 max-w-[8rem]"
              />

              <h2 className="text-5xl font-bold print:text-black">
                Proof of <br /> Communication
              </h2>

              {privateTxnData?.isPrivate && (
                <Icons.lock className="h-28 w-28 print:text-black" />
              )}
            </div>

            <div className="min-h-10 w-full print:text-black rounded-md border border-muted-foreground bg-transparent px-3 py-2 text-sm ring-offset-background text-muted-foreground">
              {txId ? (
                <span>
                  <span>Transaction ID - </span>

                  <Link
                    to={`https://arweave.net/${txId}`}
                    className="underline"
                    target="_blank"
                  >
                    {txId}
                  </Link>
                </span>
              ) : (
                "Transaction ID's block explorer link will appear here"
              )}
            </div>
          </footer>
        </div>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Private Data</DialogTitle>
          <DialogDescription>
            Enter the private key used to encrypt the data in Baldr Agent
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Key
            </Label>
            <Input
              id="key"
              placeholder="Enter encryption key"
              className="col-span-3"
              ref={keyInputRef}
              type="password"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" onClick={handleViewData}>
            View Data
          </Button>

          <DialogClose asChild>
            <Button type="button" variant="secondary" ref={closeBtnRef}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DashboardPage;
