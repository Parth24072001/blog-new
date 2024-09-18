import { Link } from "@remix-run/react";

export default function Menus(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/menus/${props._id}`}>{props.title}</Link>
    </div>
  );
}
