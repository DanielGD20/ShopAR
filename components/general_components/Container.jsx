import Head from "next/head";

const Container = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <title>ShopAR</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Container;
