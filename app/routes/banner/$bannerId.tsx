import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { mongodb, ObjectId } from "~/utils/db.server";

export async function loader({ params }: LoaderArgs) {
  const bannerId = params.bannerId;

  let db = await mongodb.db("blogging");
  let collection = await db.collection("banners");
  let banner = await collection.findOne({ _id: new ObjectId(bannerId) });

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
