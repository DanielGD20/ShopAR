import Head from "next/head";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <title>ShopAR</title>
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
