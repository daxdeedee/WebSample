import React from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import styles from '../../../components/styles/makeup.module.css';
import { Divider, Loader } from 'semantic-ui-react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

const ProductDetail = ({ item }: any) => {
  const router = useRouter();

  return (
    <>
      {router?.isFallback ? (
        <div style={{ padding: '100px 0' }}>
          <Loader active inline={'centered'} />
        </div>
      ) : (
        <>
          <Head>
            <title>{item?.name}</title>
            <meta name="description" content={item?.description}></meta>
          </Head>
          <div className={styles.item_continer}>
            <h2>{item?.name}</h2>
            <img src={item?.image_link} />
            <h3>{item?.price}$</h3>
          </div>
          <div className={styles.descreption}>
            <Divider />
            <h3>Descreption</h3>
            <div>{item?.description}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  return {
    // 실제 구현 시 목록에서 초기 id 값을 미리 할당해서 처리한다.
    paths: [{ params: { id: '740' } }, { params: { id: '730' } }, { params: { id: '729' } }],
    fallback: true, // false이면 미리생성된 id가 아니라면 404 error
  };
}

// dev에서 사용시 항상 새로 생성하므로 느리다
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const testUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(testUrl);

  return {
    props: { item: res?.data },
  };
};
