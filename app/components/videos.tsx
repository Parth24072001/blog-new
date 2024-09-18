import { Link } from "@remix-run/react";

export default function Videos(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/videos/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  );
}
