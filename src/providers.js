import React from "react";
import App from "./pages/App";
import GithubProvider from "./providers/github-provider";
import GlobalStyle from "./styles.js";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;