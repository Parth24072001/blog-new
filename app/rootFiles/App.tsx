// /* eslint-disable jsx-a11y/html-has-lang */
// import {
//   useLoaderData,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
//   useNavigation,
// } from "@remix-run/react";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useTheme } from "./useTheme";
// import { useGoogleAnalytics } from "./useGoogleAnalytics";
// import Loading from "../components/shared/Loading";
// import Navbar from "../components/shared/Navbar";
// import Footer from "../components/shared/Footer";
// import SocialModal from "../components/modals/ScocialModal";
// import { Head } from "./Head";
// import { loader } from "~/root";

// const queryClient = new QueryClient();

// export default function App() {
//   const { channelData, ENV, bannerData } = useLoaderData<typeof loader>();
//   const navigation = useNavigation();

//   useTheme();
//   useGoogleAnalytics(ENV.GOOGLEKEY, ENV.DEVELOPMENT);

//   return (
//     <html>
//       <Head />
//       <body>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-KJJJGBNP"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//           title="Google Tag Manager"
//         ></iframe>

//         <ScrollRestoration />
//         <QueryClientProvider client={queryClient}>
//           <div className="bg-background">
//             <div className=" bg-primary-300  ">
//               <Navbar bannerData={bannerData} />
//               {(navigation.state === "loading" ||
//                 navigation.state === "submitting") && (
//                 <div className="fixed bottom-0 right-0 flex items-center space-x-2 rounded bg-white p-4 max-md:inset-x-0 max-md:justify-center">
//                   <Loading />
//                   <span className="text-lg">Loading...</span>
//                 </div>
//               )}
//               <Outlet />
//               <Footer />
//             </div>
//           </div>
//         </QueryClientProvider>
//         <SocialModal channelData={channelData[0]} />
//         <Scripts />
//       </body>
//     </html>
//   );
// }
