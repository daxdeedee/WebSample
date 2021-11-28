import React from 'react';
import styles from '../styles/comment.module.css';

interface Iprops {
  profile: string;
  name: string;
  comment: string;
}

const CommentItem = ({ profile, name, comment }: Iprops) => {
  return (
    <div className={styles.continer}>
      <div>
        <img className={styles.profile} src={profile} />
        {name}
      </div>
      <div style={{ marginLeft: 20 }}>{comment}</div>
    </div>
  );
};

export default CommentItem;
