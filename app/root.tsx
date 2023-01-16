import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

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
      </body>
    </html>
  );
}
