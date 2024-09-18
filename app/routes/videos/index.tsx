import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { Blog } from "~/utils/types.server";
import BlogComponent from "~/components/videos";
import { fetchDataWithSearch } from "~/db-helpers.server";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");

  const blogs = (await fetchDataWithSearch("videos", searchTerm)) || [];

  return json({ blogs });
}

export default function Blogs() {
  let { blogs, searchedBlogs } = useLoaderData();
  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map((blog: Blog) => {
        return <BlogComponent key={blog._id} {...blog} />;
      })}

      <hr />
      <h2>Search for a blog</h2>
      <Form>
        <input type="text" name="search" placeholder="Partial title" />
        <button type="submit">Search</button>
      </Form>
      {!!searchedBlogs?.length &&
        searchedBlogs?.map((blog: Blog) => {
          return <BlogComponent key={blog._id} {...blog} />;
        })}
    </div>
  );
}
