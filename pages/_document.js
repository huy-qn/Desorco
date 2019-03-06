import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <meta
          name="google-site-verification"
          content="EYEqS2ZnnOI-W0T34Dfz8YyiOn5sLGwjHdg8GKdNIxQ"
        />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
        </Head>
        <body
          style={{
            margin: 0,
            padding: 0
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
