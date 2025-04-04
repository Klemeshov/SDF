import { useContext, useEffect } from 'react';
import s from './styles.module.css';
import { Post } from '../Post/index.js';
import { NewsContext } from '../../contexts/NewsContext.js';

export const News = () => {
  const { isLoading, isIdle, news, fetchNews } = useContext(NewsContext);

  useEffect(() => {
    if (isIdle) {
      fetchNews();
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={s.container}>
      {news.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};
