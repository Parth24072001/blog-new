import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { fetchDocumentById } from "~/db-helpers.server";

export async function loader({ params }: LoaderArgs) {
  const bannerId = params.bannerId;

  if (!bannerId) {
    throw new Error("Banner ID is required");
  }

  const banner = await fetchDocumentById("banners", bannerId);

  if (!banner) {
    throw new Response("Banner not found", { status: 404 });
  }

  return json(banner);
}

export default function Index() {
  const banner = useLoaderData();
  return (
    <div>
      <h1>BannerId: {banner.title}</h1>
      <p>{banner.plot}</p>
    </div>
  );
}
