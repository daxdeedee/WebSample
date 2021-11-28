import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

type LoginType = 'login' | 'joinin';

const LoginMenu = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState<LoginType | undefined>(undefined);

  React.useEffect(() => {
    if (router.pathname === '/login/Login') {
      setActiveItem('login');
    } else {
      setActiveItem(undefined);
    }
  }, [router]);

  const onClickTab = (tab: LoginType) => {
    setActiveItem(tab);
    switch (tab) {
      case 'login':
        router.push('/login/Login');
        return;
      // case 'joinin':
      //   router.push('/about/About');
      //   return;
    }
  };

  return (
    <Menu text>
      <Menu.Item name="Home" active={activeItem === 'login'} onClick={() => onClickTab('login')}>
        Login
      </Menu.Item>
      {/* <Menu.Item name="reviews" active={activeItem === 'joinin'} onClick={() => onClickTab('joinin')}>
        Join In
      </Menu.Item> */}
    </Menu>
  );
};

export default LoginMenu;
