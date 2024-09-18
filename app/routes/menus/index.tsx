import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import type { Blog } from "~/utils/types.server";
import BlogComponent from "~/components/blog";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);

  let db = await mongodb.db("blogging");
  let collection = await db.collection("blogs");
  let blogs = await collection.find({}).limit(10).toArray();

  let searchedBlogs: Blog[] = [];
  let searchTerm = url.searchParams.get("search");
  if (searchTerm) {
    let searchRegex = new RegExp(searchTerm, "i");
    searchedBlogs = (await collection
      .find({ title: { $regex: searchRegex } })
      .limit(10)
      .toArray()) as Blog[];
  }

  return json({ blogs, searchedBlogs });
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
      {!!searchedBlogs.length &&
        searchedBlogs.map((blog: Blog) => {
          return <BlogComponent key={blog._id} {...blog} />;
        })}
    </div>
  );
}
