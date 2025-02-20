import {useEffect, useState} from "react";
import {getNews} from "../../api/news/requests.js";
import { AiOutlineLike } from "react-icons/ai";
import s from './styles.module.css';

export const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getNews().then((res) => {
            setIsLoading(false);
            setNews(res);
        })
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={s.container}>
            {news.map(({id, name, text, likesCounter}) => {
                return (
                    <div key={id} className={s.ItemContainer}>
                        <div className={s.name}>{name}</div>
                        <div className={s.text}>{text}</div>
                        <div className={s.likesContainer}>
                            <AiOutlineLike/>
                            {likesCounter}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};