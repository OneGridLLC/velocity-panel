import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  let [isAuthorized, setAuthorized] = useState(false);
  let [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(Router.pathname);
    if (typeof window !== 'undefined') {
      setAuthorized(window.location.hostname == "localhost" ? true : false)
   }
  }, []);
  if (isAuthorized == false && pathName.startsWith("/app")) {
    return <h1>You are not Authorized</h1>;
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
