import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { mongodb, ObjectId } from "~/utils/db.server";

export async function loader({ params }: LoaderArgs) {
  const blogId = params.blogId;

  let db = await mongodb.db("blogging");
  let collection = await db.collection("blogs");
  let blog = await collection.findOne({ _id: new ObjectId(blogId) });

  return json(blog);
}

export default function Index() {
  const blog = useLoaderData();
  return (
    <div>
      <h1>Blog: {blog.title}</h1>
      <p>{blog.plot}</p>
    </div>
  );
}
