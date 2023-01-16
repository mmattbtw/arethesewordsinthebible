import type { MetaFunction, SerializeFrom } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

export const loader = () => {
  return {
    ENV: {
      VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  };
};

// Optional:
// If you're not already handling TS support for environment variables
declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>["ENV"];
  }
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "ARE THESE WORDS IN THE BIBLE",
  description: "PROBABLY NOT.",
  "twitter:title": "ARE THESE WORDS IN THE BIBLE",
  "twitter:image": "https://i.imgur.com/EU2p2WY.png",
  "twitter:card": "summary_large_image",
  "twitter:description": "PROBABLY NOT.",
  "twitter:creator": "@mmattbtw",
  "twitter:site": "@mmattbtw",
  "og:title": "ARE THESE WORDS IN THE BIBLE",
  "og:image": "https://i.imgur.com/EU2p2WY.png",
  "og:description": "PROBABLY NOT.",
  "og:type": "website",
});

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  );
}
