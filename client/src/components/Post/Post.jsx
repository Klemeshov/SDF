import React from 'react';
import dayjs from 'dayjs';
import { FaRegComment } from 'react-icons/fa';
import { TiArrowBackOutline } from 'react-icons/ti';
import s from './styles.module.css';
import { AiOutlineLike } from 'react-icons/ai';

export const Post = ({ post }) => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <img className={s.avatar} src={post.customer.avatar_url} />
        <div>{`${post.customer.first_name} ${post.customer.second_name}`}</div>
      </div>

      {post.photos.length > 0 && (
        <div className={s.imagesContainer}>
          {post.photos.map((img, index) => (
            <div className={s.imageContainer} key={index}>
              <img className={s.image} src={img} alt="" />
            </div>
          ))}
        </div>
      )}

      <div>{post.text}</div>
      <div className={s.foot}>
        <button className={s.footButton}>
          <AiOutlineLike size={20} />0
        </button>
        <button className={s.footButton}>
          <FaRegComment size={20} />0
        </button>
        <button className={s.footButton}>
          <TiArrowBackOutline size={20} />0
        </button>

        <div>{dayjs(post.created_at).format('DD.MM.YYYY HH:mm')}</div>
      </div>
    </div>
  );
};
