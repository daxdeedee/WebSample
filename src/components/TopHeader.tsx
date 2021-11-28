import React from 'react';
import { useRouter } from 'next/router';
import { Divider } from 'semantic-ui-react';

import TabMenu from './TabMenu';
import LoginMenu from './header/LoginMenu';

const TopHeader = () => {
  const router = useRouter();

  return (
    <>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <div style={{ display: 'flex', marginTop: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ width: 100, cursor: 'pointer' }}
              src="images/icon_light.jpeg"
              alt="logo"
              onClick={() => {
                router.push('/');
              }}
            />
            <div style={{ marginLeft: 50 }}>
              <TabMenu />
            </div>
          </div>
          <LoginMenu />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default TopHeader;
