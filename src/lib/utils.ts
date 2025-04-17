import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async (query: string) => {
  if (!query) throw new Error("Query is required");

  const res = await fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify({ query: query.trim(), variables: {} }),
  });

  if (!res.ok) {
    console.error("❌ Fetcher: HTTP error!", { status: res.status });
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  if (data.errors) throw new Error(data.errors[0]?.message || "GraphQL error");

  return data.data;
};
