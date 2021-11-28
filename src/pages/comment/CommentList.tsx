import React from 'react';
import CommentItem from '../../components/items/CommentItem';
import { Button } from 'semantic-ui-react';
import styles from '../../components/styles/comment.module.css';
import { useRouter } from 'next/router';

interface IComment {
  id: string;
  profile: string;
  name: string;
  comment: string;
}

const DUMMY_LIST: IComment[] = [
  { id: '01', profile: '/images/profile01.png', name: '유비', comment: '오셨습니까?' },
  { id: '02', profile: '/images/profile02.png', name: '노숙', comment: '안녕하십니까?' },
  { id: '03', profile: '/images/profile01.png', name: '유비', comment: '흑흑....' },
  { id: '04', profile: '/images/profile02.png', name: '노숙', comment: '아니 무슨일 입니까?' },
  { id: '05', profile: '/images/profile01.png', name: '유비', comment: '흑흑.... 맛있었다 오늘 밥은.' },
  { id: '06', profile: '/images/profile02.png', name: '노숙', comment: '지금와서 시치미떼야 소용없습니다.' },
];

interface Iprops {
  list?: IComment[];
  isPreview?: boolean;
}

const CommentList = ({ list = undefined, isPreview = true }: Iprops) => {
  const router = useRouter();
  const commentList = isPreview ? DUMMY_LIST.slice(2, 5) : DUMMY_LIST;

  const onMore = () => {
    router.push('/comment/Comment');
  };

  return (
    <div className={styles.list_continer}>
      <div className={styles.list_title}>인기 게시글</div>
      {commentList?.map((item) => (
        <CommentItem {...item} key={item?.id} />
      ))}
      {isPreview && (
        <Button className={styles.more} onClick={onMore}>
          + 더보기
        </Button>
      )}
    </div>
  );
};

export default CommentList;
