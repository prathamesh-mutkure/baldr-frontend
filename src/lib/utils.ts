import { MemAPIData } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isContentPrivate(text: string): boolean {
  return text.startsWith("0-0");
}

export function getContentInfo(text: string): {
  prefix: "0-0" | "";
  content: string;
  key: "" | string;
} {
  const isPrivate = isContentPrivate(text);

  if (!isPrivate)
    return {
      prefix: "",
      key: "",
      content: text,
    };

  const [str, key] = text.split("+");

  return {
    prefix: "0-0",
    content: str.slice(3),
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
