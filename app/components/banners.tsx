import { Link } from "@remix-run/react";

export default function Banners(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/banners/${props._id}`}>
        {props.title} ({props.year})
      </Link>
    </div>
  );
}
