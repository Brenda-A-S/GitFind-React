import React from "react";
import { createRoot } from 'react-dom/client';

import Providers from "./providers";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);