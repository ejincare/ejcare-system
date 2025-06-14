import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import {client} from "@/utils/apolloClient";
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
    <GoogleTagManager gtmId="GTM-PVSPRVBH"  />
  </ApolloProvider>
}
