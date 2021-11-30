import { NextPage } from 'next';
import Head from 'next/head';
import styles from '#/styles/Home.module.css';
import React from 'react';
import CommentList from '#/pages/comment/CommentList';
import Axios from 'axios';
import { GetStaticProps } from 'next';
import Introduce from '#/components/introduce/Introduce';
import ProductList from '#/pages/product/ProductList';

const Home: NextPage = ({ list }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Gunn</title>
      </Head>
      <main className={styles.main}>
        <Introduce />
        <CommentList />
        <ProductList list={list} isPreview={true} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const testUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick';
  const res = await Axios.get(testUrl);

  return {
    props: { list: res?.data },
  };
};
