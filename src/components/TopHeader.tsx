import React from 'react';
import { useRouter } from 'next/router';
import { Divider } from 'semantic-ui-react';
import styles from '#/components/styles/top.module.css';
import TabMenu from '#/components/TabMenu';
import LoginMenu from '#/components/header/LoginMenu';

const TopHeader = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.topbar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: 100, cursor: 'pointer' }}
            src="images/icon_light.jpeg"
            alt="logo"
            onClick={() => {
              router.push('/');
            }}
          />
          <TabMenu />
        </div>
        <LoginMenu />
      </nav>
      <Divider />
    </>
  );
};

export default TopHeader;
