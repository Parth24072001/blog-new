import { useState } from "react";
import { Link } from "@remix-run/react";
import { ActionArgs, redirect } from "@remix-run/node";
import { incrementViewCount, toggleLike } from "~/db-helpers.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const blogId = formData.get("blogId") as string;
  const clientId = formData.get("clientId") as string;
  const actionType = formData.get("actionType") as string; // 'view' or 'like'

  if (actionType === "view") {
    const success = await incrementViewCount("blogs", blogId);
    if (!success) {
      return new Response("Error incrementing view count", { status: 500 });
    }
  } else if (actionType === "like") {
    const success = await toggleLike("blogs", blogId, clientId);
    if (!success) {
      return new Response("Error toggling like", { status: 500 });
    }
  } else {
    return new Response("Invalid action type", { status: 400 });
  }

  // Optionally redirect to the blog detail page or return a success response
  return redirect(`/blogs/${blogId}`);
}

const Blog = (props: any) => {
  const [liked, setLiked] = useState<boolean>(props.likedBy.includes("123"));

  const handleAction = async (actionType: "view" | "like") => {
    try {
      const response = await fetch(`/blogs/${props._id}/action`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          blogId: props._id,
          clientId: "123",
          actionType: actionType,
        }),
      });

      if (response.ok) {
        if (actionType === "like") {
          const result = await response.json();
          setLiked(result.likedBy.includes("123"));
        }
      } else {
        console.error("Error handling action:", await response.json());
      }
    } catch (error) {
      console.error("Error handling action:", error);
    }
  };

  return (
    <div key={props._id}>
      <Link to={`/blogs/${props._id}`}>{props.title}</Link>
      <button onClick={() => handleAction("view")}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Blog;
