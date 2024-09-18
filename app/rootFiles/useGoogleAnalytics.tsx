/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";

export function useGoogleAnalytics(GOOGLEKEY: string, DEVELOPMENT: string) {
  useEffect(() => {
    if (GOOGLEKEY && DEVELOPMENT === "production") {
      TagManager.initialize({ gtmId: "GTM-KJJJGBNP" });

      ReactGA.initialize(GOOGLEKEY);

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLEKEY}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", GOOGLEKEY, {
          page_path: window.location.pathname,
        });
        gtag("event", "page_view");
      };
    } else if (DEVELOPMENT !== "production") {
      console.log(
        "Google Analytics is disabled in non-production environment."
      );
    } else {
      console.error("Google Analytics tracking ID is missing!");
    }
  }, [GOOGLEKEY, DEVELOPMENT]);
}
