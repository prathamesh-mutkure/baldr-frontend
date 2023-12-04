import { MemAPIData, TxnData } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isContentPrivate(text: string): boolean {
  return text.startsWith("0-0");
}

export function expandTxnData(data: TxnData): TxnData & {
  key: string | null;
  isPrivate: boolean;
} {
  const isPrivate = isContentPrivate(data.content);

  if (!isPrivate)
    return {
      ...data,
      isPrivate: false,
      key: null,
    };

  const [str, key] = data.content.split("+");

  return {
    ...data,
    content: str.slice(3),
    isPrivate: true,
    key,
  };
}

export async function getMemData() {
  const resp = await fetch(
    "https://api.mem.tech/api/state/v_RDVpHFBIDpX1owrBXc59Z1-5O0BmNj8zPNwtNItnY"
  );

  const data = (await resp.json()) as MemAPIData;

  return data;
}
