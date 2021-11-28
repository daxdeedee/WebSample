import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styles from '../styles/makeup.module.css';
import Link from 'next/link';

const MakeUpItem = ({ item }: any) => {
  const [isImgError, setIsImgError] = React.useState(false);

  return (
    <>
      {item && (
        <Grid.Column>
          <Link href={`/product/detail/${item?.id}`} as={`/product/detail/${item?.id}`}>
            <a>
              <div className={styles.item_continer}>
                <img
                  className={styles.image_item}
                  src={isImgError ? '/images/image_error.png' : item?.image_link}
                  onError={() => setIsImgError(true)}
                  alt={item?.name}
                />
                <strong>{item?.name || '-'}</strong>
                <span className={styles.item_category}>
                  {item?.category || '-'} / {item?.product_type || '-'}
                </span>
                <strong className={styles.item_price}>{item?.price || '-'}$</strong>
              </div>
            </a>
          </Link>
        </Grid.Column>
      )}
    </>
  );
};

export default MakeUpItem;
