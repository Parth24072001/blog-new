import { useRouteLoaderData } from "@remix-run/react";

export function useRootLoaderData() {
  return useRouteLoaderData("root");
}
