import type { NextPage } from 'next';
import styles from '#/styles/Home.module.css';
import React from 'react';
import Axios from 'axios';
import { GetStaticProps } from 'next';
import ProductList from '#/pages/product/ProductList';
import { useRouter } from 'next/router';

const Product: NextPage = ({ list }: any) => {
  const router = useRouter();
  console.log(`=== Product : !!!`);
  return (
    <div className={styles.container}>
      <ProductList list={list} isPreview={false} />
    </div>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async () => {
  const testUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick';
  const res = await Axios.get(testUrl);

  return {
    props: { list: res?.data },
  };
};
