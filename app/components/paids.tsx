import { Link } from "@remix-run/react";

export default function Paids(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/paid/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  );
}
