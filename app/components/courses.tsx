import { Link } from "@remix-run/react";

export default function Courses(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/courses/${props._id}`}>{props.title}</Link>
    </div>
  );
}
