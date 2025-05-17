import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body className="antialiased">
        <GoogleTagManager gtmId="GTM-PVSPRVBH"  />
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}
