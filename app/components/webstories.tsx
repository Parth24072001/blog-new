import { Link } from "@remix-run/react";

export default function WebStories(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/webstories/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  );
}
