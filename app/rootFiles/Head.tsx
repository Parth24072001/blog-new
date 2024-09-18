import { Meta, Links } from "@remix-run/react";

export const Head = () => (
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    <Meta />
    <Links />
  </head>
);
