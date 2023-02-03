import React from "react";
import "src/styles/base.css";

const Layout = ({ title, generator = "", children, head }) => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        {generator && <meta name="generator" content={generator} />}
        <title>{title || ""}</title>
        {head && head?.()}
        {/* CLONE CUSTOMIZE */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <title>R50Time – 50歳からの出会いを応援するR50Time</title>
        <meta name="robots" content="max-image-preview:large" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
        <link
          rel="stylesheet"
          id="stow-fonts-css"
          href="/assets/font.css"
          media="all"
        />
        <link
          href="https://fonts.gstatic.com/"
          crossOrigin=""
          rel="preconnect"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="R50Time" />
        <meta
          property="og:description"
          content="50歳からの出会いを応援するR50Time"
        />
        {/* <meta property="og:url" content="https://r50time.wordpress.com/" /> */}
        <meta property="og:site_name" content="R50Time" />
        <meta
          property="og:image"
          content="https://lp.r50time.jp/wp-content/uploads/2022/12/main@lp.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="50歳からの出会いを応援するR50Time"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="fb:app_id" content="249643311490" />
        <meta name="twitter:text:title" content="R50Time" />
        <meta
          name="twitter:image"
          content="https://lp.r50time.jp/wp-content/uploads/2022/12/main@lp.png?w=640"
        />
        <meta
          name="twitter:description"
          content="50歳からの出会いを応援するR50Time"
        />
        <meta
          name="twitter:image:alt"
          content="50歳からの出会いを応援するR50Time"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
          sizes="16x16 24x24 32x32 48x48"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/favicon.ico"
          sizes="16x16 24x24 32x32 48x48"
        />
        <link rel="apple-touch-icon" href="/static/favicon.png" />
        <meta name="application-name" content="R50Time" />
        <meta
          name="msapplication-window"
          content="width=device-width;height=device-height"
        />
        <meta
          name="msapplication-tooltip"
          content="50歳からの出会いを応援するR50Time"
        />
        <meta
          name="description"
          content="インストールはこちら マッチングはマイナスなイメージですか？実は、警察署や総務省への届け出が必要な優良なサービスで…"
        />
        <link
          rel="stylesheet"
          id="style-css"
          href="/assets/style.css"
          media="all"
        />
      </head>
      <body>{children}</body>
    </>
  );
};

export default Layout;
