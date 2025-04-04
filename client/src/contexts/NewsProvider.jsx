import React, { useState } from 'react';
import { NewsContext } from './NewsContext.js';
import { getNews } from '../api/news/requests.js';

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isIdle, setIsIdle] = useState(true);

  const fetchNews = async () => {
    setIsLoading(true);
    setIsIdle(false);
    getNews()
      .then((res) => {
        setNews(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const value = {
    isLoading,
    isIdle,
    news,
    fetchNews
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
