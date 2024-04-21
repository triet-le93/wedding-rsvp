import Document, { Html, Head, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
