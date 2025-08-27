import type { AppProps } from "next/app";
import "../app/globals.css"; // reuse the same CSS
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
