import { Link } from "@remix-run/react";

export default function Channels(props: any) {
  return (
    <div key={props._id}>
      <Link to={`/channels/${props._id}`}>{props.channelName}</Link>
    </div>
  );
}
