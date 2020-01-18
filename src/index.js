// Add shims and polyfills
import "@webcomponents/webcomponentsjs/webcomponents-bundle";

import "./elements/app-store";
import "./elements/app-addcart";
import "./elements/app-header";
import "./elements/app-productcard";
import "./elements/app-footer";

// Enable HMR for development
if (process.env.NODE_ENV !== "production") module.hot.accept();
