import Head from "next/head";

const Container = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <title>ShopAR</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Container;
