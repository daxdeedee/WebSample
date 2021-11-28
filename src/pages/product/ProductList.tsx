import React from 'react';
import Axios from 'axios';
import { Grid, Loader } from 'semantic-ui-react';
import MakeUpItem from '../../components/items/MakeUpItem';
import { Button } from 'semantic-ui-react';
import styles from '../../components/styles/makeup.module.css';
import { useRouter } from 'next/router';

interface IProductProps {
  list: any[];
  isPreview?: boolean;
}

const ProductList = ({ list, isPreview = false }: IProductProps) => {
  const router = useRouter();
  const productList = isPreview ? list?.slice(0, 6) : list;

  const onMore = () => {
    router.push('/product/Product');
  };

  return (
    <div className={styles.list_continer}>
      <div className={styles.list_title}>상품목록</div>

      <Grid columns={3} divided>
        <Grid.Row>
          {productList?.map((item: any) => {
            return <MakeUpItem item={item} key={item.id} />;
          })}
        </Grid.Row>
      </Grid>
      {isPreview && (
        <div style={{ marginTop: 30 }}>
          <Button className={styles.more_button} onClick={onMore}>
            + 더보기
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
