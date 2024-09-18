import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { startTransition, StrictMode } from "react";

import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
