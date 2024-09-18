import { Link } from "@remix-run/react";

export default function Blog(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/blogs/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  );
}
