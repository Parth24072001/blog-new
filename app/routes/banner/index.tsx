import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { Blog } from "~/utils/types.server";

import Banners from "~/components/banners";
import { fetchDataWithSearch } from "~/db-helpers.server";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");

  const banners = await fetchDataWithSearch("banners", searchTerm);

  return json({ banners });
}

export default function Blogs() {
  let { banners, searchedBanners } = useLoaderData();

  return (
    <div>
      <h1>banners</h1>

      {banners.map((banners: any) => {
        return <Banners key={banners._id} {...banners} />;
      })}

      <hr />
      <h2>Search for a blog</h2>
      <Form>
        <input type="text" name="search" placeholder="Partial title" />
        <button type="submit">Search</button>
      </Form>
      {!!searchedBanners?.length &&
        searchedBanners?.map((blog: Blog) => {
          return <Banners key={blog._id} {...blog} />;
        })}
    </div>
  );
}
