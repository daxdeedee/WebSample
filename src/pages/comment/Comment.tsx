import type { NextPage } from 'next';
import styles from '#/styles/Home.module.css';
import React from 'react';
import { useRouter } from 'next/router';
import CommentList from '#/pages/comment/CommentList';

const Comment: NextPage = ({ list }: any) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <CommentList isPreview={false} />
    </div>
  );
};

export default Comment;
