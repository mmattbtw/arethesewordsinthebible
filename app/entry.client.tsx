import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
hydrate(<RemixBrowser />, document);
reportWebVitals(sendToVercelAnalytics);
