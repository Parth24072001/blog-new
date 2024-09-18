// import {
//   Outlet,
//   LiveReload,
//   Links,
//   Link,
//   Meta,
//   Scripts,
// } from "@remix-run/react";
// import React from "react";
// import stylesheet from "~/tailwind.css";

// export function links() {
//   return [{ rel: "stylesheet", href: stylesheet }];
// }

// export function meta() {
//   const description = "A template for Remix applications using MongoDB";
//   const keywords = "remix, react, mongodb, tailwindcss";

//   return {
//     description,
//     keywords,
//   };
// }

// export default function App() {
//   return (
//     <Document>
//       <Layout>
//         <Outlet />
//       </Layout>
//     </Document>
//   );
// }

// type iDocType = {
//   children: React.ReactNode;
//   title?: string;
// };

// export function ErrorBoundry({ error }: any) {
//   console.log(error);
//   return (
//     <Document>
//       <Layout>
//         <h1>Sorry An Error Occured</h1>
//         <pre>{error}</pre>
//       </Layout>
//     </Document>
//   );
// }

// function Document({ children, title }: iDocType) {
//   return (
//     <html lang="en">
//       <head>
//         <Meta />
//         <Links />
//         <title>{title ? title : "MongoDB Remix Template"}</title>
//       </head>
//       <body>
//         {children}
//         {process.env.NODE_ENV === "development" && <LiveReload />}
//       </body>
//       <Scripts />
//     </html>
//   );
// }

// function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <div className="flex flex-col h-screen mx-2">
//         <nav className="flex h-16 items-center width-full"></nav>

//         <div className="flex flex-1 overflow-hidden">
//           <aside className="hidden sm:block my-1 w-64 overflow-y-auto">
//             <ul className="list-none">
//               <li>
//                 <Link to="/blogs">Blogs</Link>
//               </li>

//               <li>
//                 <Link to="/banner">banner</Link>
//               </li>

//               <li>
//                 <Link to="/channels">channels</Link>
//               </li>

//               <li>
//                 <Link to="/courses">courses</Link>
//               </li>

//               <li>
//                 <Link to="/images">images</Link>
//               </li>

//               <li>
//                 <Link to="/menus">menus</Link>
//               </li>

//               <li>
//                 <Link to="/paids">paids</Link>
//               </li>

//               <li>
//                 <Link to="/videos">videos</Link>
//               </li>

//               <li>
//                 <Link to="/webstories">webstories</Link>
//               </li>
//             </ul>
//           </aside>
//           <main className="flex flex-1 my-1 overflow-y-auto paragraph px-4">
//             {children}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

/* eslint-disable import/no-duplicates */
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";

import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Loading from "./components/shared/Loading";

import { linksData } from "./rootFiles/Links";
import { makeMeta } from "./rootFiles/Meta";
import { LoaderDataFile } from "./rootFiles/LoaderDataFile";
import { useTheme } from "./rootFiles/useTheme";
import { useGoogleAnalytics } from "./rootFiles/useGoogleAnalytics";
import SocialModal from "./components/modals/ScocialModal";
import NotFound from "./components/shared/NotFound";
import { getPageTitle } from "./components/shared/Helper";

// Export the loader function
export const loader: LoaderFunction = LoaderDataFile;

// Export the meta function

// Export links
export const links = linksData;

export function ErrorBoundary() {
  return (
    <div>
      <NotFound />
    </div>
  );
}

export const meta: MetaFunction = makeMeta(() => {
  return [
    {
      title: getPageTitle("Retro Community"),
    },
    {
      content: getPageTitle("Blogs"),
      name: "og:title",
    },
  ];
});

export default function App() {
  const { channelData, ENV, bannerData } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  console.log(channelData);
  useTheme();
  useGoogleAnalytics(ENV.GOOGLEKEY, ENV.DEVELOPMENT);

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, interactive-widget=resizes-content"
        ></meta>
        <Meta />
        <Links />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJJJGBNP');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KJJJGBNP"
        ></script>
        {/* Google Analytics */}
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

        <div className="bg-background custom-container">
          <div className=" bg-primary-300 ">
            <Navbar bannerData={bannerData} />
            {navigation.state === "loading" ||
            navigation.state === "submitting" ? (
              <div className="fixed bottom-0 right-0 flex items-center space-x-2 rounded bg-white p-4 max-md:inset-x-0 max-md:justify-center">
                <Loading />
                <span className="text-lg">Loading...</span>
              </div>
            ) : null}
            <Outlet />
            <Footer />
          </div>
        </div>

        <SocialModal channelData={channelData[0]} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
