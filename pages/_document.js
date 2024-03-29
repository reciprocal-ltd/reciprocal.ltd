import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap"
            rel="stylesheet"
          />
          <link href="/fonts.css" rel="stylesheet" />
          <link
            rel="icon"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.54.59-2022.7.27..21.24.32-icon.jpeg"
          />
          <link
            rel="preload"
            as="image"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.55.43-2022.7.27..21.25.13-collage1.jpg"
          />
          <link
            rel="preload"
            as="image"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.55.43-2022.7.27..21.25.19-collage2.jpg"
          />
          <link
            rel="preload"
            as="image"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.55.43-2022.7.27..21.25.25-collage3.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
