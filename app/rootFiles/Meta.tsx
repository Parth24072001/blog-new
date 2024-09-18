import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getPageTitle } from "../components/shared/Helper";

export const makeMeta = <Loader extends LoaderFunction | unknown = unknown>(
  leafMetaFn: MetaFunction<Loader>
): MetaFunction<Loader> => {
  return (arg) => {
    const leafMeta = leafMetaFn(arg);
    const href = "./";
    return [
      ...leafMeta,
      {
        href,
        rel: "canonical",
        tagName: "link",
      },
    ];
  };
};

export const MetaData: MetaFunction = makeMeta(() => {
  const description = "Retro Community blogs";
  return [
    { title: description },
    { content: getPageTitle(description), name: "og:title" },
  ];
});
