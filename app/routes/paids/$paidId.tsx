import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { fetchDocumentById } from "~/db-helpers.server";

export async function loader({ params }: LoaderArgs) {
  const blogId = params.blogId;

  if (!blogId) {
    throw new Error("Blog ID is required");
  }

  const blog = await fetchDocumentById("paids", blogId);

  if (!blog) {
    throw new Response("Blog not found", { status: 404 });
  }

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
