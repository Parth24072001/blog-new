import { LinksFunction } from "@remix-run/node";
import Style from "~/tailwind.css?url";
import commonStyles from "~/index.css?url";
import common from "~/components/assets/css/common.css?url";

export const linksData: LinksFunction = () => [
  { href: Style, rel: "stylesheet" },
  { href: commonStyles, rel: "stylesheetCommon" },
  { href: common, rel: "common" },
];
