import { Link } from "@remix-run/react";

export default function Images(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/images/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  );
}
