import type { AppProps } from 'next/app';
import React from 'react';
// import "../../styles/globals.css"; // 글로벌 css
import 'semantic-ui-css/semantic.min.css'; // sementic css 사용
import styles from '../../styles/Home.module.css';

import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';

//페이지 전환시 레이아웃유지, 페이지 전환 시 상태값 유지
// componentdidcatch를 이용해 에러 핸들링 가능
// 추가적인 데이터를 페이지로 주입
// global CSS 선언

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <TopHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

//Component는 현재 페이지를 의미, 페이지 전환 시 component값이 변경됨
// pageProps datapatching method를 통해 가져온 초기 객체, ssr시에 사용?, 사용하지 않을때는 빈 객체가 전달된다.

export default MyApp;
