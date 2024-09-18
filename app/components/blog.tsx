import { useState } from "react";
import { Link } from "@remix-run/react";
import { ActionArgs, json } from "@remix-run/node";
import {
  fetchDocumentById,
  incrementLikeCount,
  toggleLike,
} from "~/db-helpers.server";

export async function action({ request }: ActionArgs) {
  const formData = new URLSearchParams(await request.text());
  const id = formData.get("id")!;
  const clientId = "12345"!;
  const action = formData.get("action")!; // 'like' or 'view'

  try {
    if (action === "view") {
      const success = await incrementLikeCount("blogs", id);
      if (!success) throw new Error("Failed to increment view count");
    } else if (action === "like") {
      const success = await toggleLike("blogs", id, clientId);
      if (!success) throw new Error("Failed to toggle like");
    } else {
      return json({ message: "Invalid action" }, { status: 400 });
    }

    // Fetch the updated document
    const updatedBlog = await fetchDocumentById("blogs", id);
    if (updatedBlog) {
      return json(updatedBlog);
    } else {
      return json({ message: "Blog not found" }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Error handling action:", error);
    return json({ message: error.message }, { status: 500 });
  }
}

const Blog = (props: any) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLikeToggle = async () => {
    const formData = new URLSearchParams();
    formData.append("id", props._id);
    formData.append("clientId", "1233");
    // formData.append("action", liked ? "view" : "like");
    formData.append("action", !liked ? "view" : "like");

    try {
      const response = await fetch(`/blogs/${props._id}/update`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const updatedBlog = await response.json();
        setLiked(updatedBlog.likedBy.includes(props.currentClientId));
      } else {
        console.error("Error handling like toggle:", await response.json());
      }
    } catch (error) {
      console.error("Error handling like toggle:", error);
    }
  };

  return (
    <div key={props._id}>
      <Link to={`/blogs/${props._id}`}>{props.title}</Link>
      <button onClick={handleLikeToggle}>{liked ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default Blog;
