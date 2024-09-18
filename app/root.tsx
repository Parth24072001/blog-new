/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  Outlet,
  LiveReload,
  Links,
  Link,
  Meta,
  ScrollRestoration,
  Scripts,
  useLoaderData,
} from "@remix-run/react";
import React from "react";
import stylesheet from "~/tailwind.css";
import NotFound from "./components/moduls/NotFound";

import { useTheme } from "./rootFiles/useTheme";
import Loading from "./components/shared/Loading";
import Footer from "./components/shared/Footer";
import { json, LoaderArgs } from "@remix-run/node";
import { fetchDataWithSearch } from "./db-helpers.server";
import Navbar from "./components/shared/Navbar";
import SocialModal from "./components/modals/ScocialModal";
import { useGoogleAnalytics } from "./rootFiles/useGoogleAnalytics";
import { env } from "process";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function meta() {
  const description = "A template for Remix applications using MongoDB";
  const keywords = "remix, react, mongodb, tailwindcss";

  return {
    description,
    keywords,
  };
}

export default function App() {
  const env = useLoaderData();

  useTheme();
  useGoogleAnalytics(env.GOOGLEKEY, env.DEVELOPMENT);
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

type iDocType = {
  children: React.ReactNode;
  title?: string;
};

export function ErrorBoundry({ error }: any) {
  return (
    <Document>
      <Layout>
        <h1>Sorry An Error Occured</h1>
        <pre>{error}</pre>
        <NotFound />
      </Layout>
    </Document>
  );
}
export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");

  const banners = await fetchDataWithSearch("banners", searchTerm);
  const menus = (await fetchDataWithSearch("menus", searchTerm)) || [];
  const channels = (await fetchDataWithSearch("channels", searchTerm)) || [];
  return json({
    GOOGLEKEY: process.env.GOOGLEKEY || "",
    DEVELOPMENT: process.env.DEVELOPMENT || "",
    banners,
    channels,
    menus,
  });
}

function Document({ children, title }: iDocType) {
  let { banners, menus, channels } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content"
        ></meta>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJJJGBNP');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KJJJGBNP"
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B622FHY91H"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B622FHY91H');`,
          }}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content"
        ></meta>
        <Meta />
        <Links />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJJJGBNP');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KJJJGBNP"
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B622FHY91H"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B622FHY91H');`,
          }}
        />
      </head>
      <body>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KJJJGBNP"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        ></iframe>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
        />

        <div className="bg-background custom-container">
          <div className=" bg-primary-300 ">
            <Navbar bannerData={banners} menus={menus} />
            {false ? (
              <div className="fixed bottom-0 right-0 flex items-center space-x-2 rounded bg-white p-4 max-md:inset-x-0 max-md:justify-center">
                <Loading />
                <span className="text-lg">Loading...</span>
              </div>
            ) : null}
            <Outlet />
            <Footer />
          </div>
        </div>

        <SocialModal channelData={channels[0]} />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        {/* <body>
          {children}
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body> */}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col h-screen mx-2">
        <nav className="flex h-16 items-center width-full"></nav>

        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden sm:block my-1 w-64 overflow-y-auto">
            <ul className="list-none">
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>

              <li>
                <Link to="/banner">banner</Link>
              </li>

              <li>
                <Link to="/channels">channels</Link>
              </li>

              <li>
                <Link to="/courses">courses</Link>
              </li>

              <li>
                <Link to="/images">images</Link>
              </li>

              <li>
                <Link to="/menus">menus</Link>
              </li>

              <li>
                <Link to="/paids">paids</Link>
              </li>

              <li>
                <Link to="/videos">videos</Link>
              </li>

              <li>
                <Link to="/webstories">webstories</Link>
              </li>
            </ul>
          </aside>
          <main className="flex flex-1 my-1 overflow-y-auto paragraph px-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
