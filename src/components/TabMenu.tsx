import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

type TabType = 'home' | 'about' | 'mypage';

const TabMenu = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState<TabType | undefined>('home');

  React.useEffect(() => {
    if (router.pathname === '/') {
      setActiveItem('home');
    } else if (router.pathname === '/About/about') {
      setActiveItem('about');
    } else if (router.pathname === '/myPage/MyPage') {
      setActiveItem('mypage');
    } else if (router.pathname === '/login/Login') {
      setActiveItem(undefined);
    }
  }, [router]);

  const onClickTab = (tab: TabType) => {
    setActiveItem(tab);
    switch (tab) {
      case 'home':
        router.push('/');
        return;
      case 'about':
        router.push('/about/About');
        return;
      case 'mypage':
        router.push('/myPage/MyPage');
        return;
    }
  };

  return (
    <Menu text>
      <Menu.Item name="Home" active={activeItem === 'home'} onClick={() => onClickTab('home')}>
        Home
      </Menu.Item>
      <Menu.Item name="reviews" active={activeItem === 'about'} onClick={() => onClickTab('about')}>
        About
      </Menu.Item>
      <Menu.Item name="upcomingEvents" active={activeItem === 'mypage'} onClick={() => onClickTab('mypage')}>
        MyPage
      </Menu.Item>
    </Menu>
  );
};

export default TabMenu;
