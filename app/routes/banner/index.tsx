import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import type { Blog } from "~/utils/types.server";

import Banners from "~/components/banners";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);

  let db = await mongodb.db("blogging");
  let collection = await db.collection("banners");
  let banners = await collection.find({}).limit(10).toArray();

  let searchedBanners: any = [];
  let searchTerm = url.searchParams.get("search");
  if (searchTerm) {
    let searchRegex = new RegExp(searchTerm, "i");
    searchedBanners = (await collection
      .find({ title: { $regex: searchRegex } })
      .limit(10)
      .toArray()) as Blog[];
  }

  return json({ banners, searchedBanners });
}

export default function Blogs() {
  let { banners, searchedBanners } = useLoaderData();
  console.log(searchedBanners);

  return (
    <div>
      <h1>banners</h1>
      <h2>Fetch ten blogs</h2>
      <p className="mb-2">Here are some blogs from `blogging.blogs`</p>
      {banners.map((banners: any) => {
        return <Banners key={banners._id} {...banners} />;
      })}

      <hr />
      <h2>Search for a blog</h2>
      <Form>
        <input type="text" name="search" placeholder="Partial title" />
        <button type="submit">Search</button>
      </Form>
      {!!searchedBanners.length &&
        searchedBanners.map((blog: Blog) => {
          return <Banners key={blog._id} {...blog} />;
        })}
    </div>
  );
}
