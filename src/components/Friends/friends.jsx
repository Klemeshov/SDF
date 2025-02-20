import s from "./styles.module.css";
import { useState, useEffect } from "react";
import { getFriends } from "../../api/friends/requests.js";

export const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getFriends().then((value) => {
            setIsLoading(false);
            setFriends(value);
        });
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={s.container}>
            {friends.map(({ id, name, surName, status, avatar }) => (
                <div className={s.Itemcontainer}>
                    <div className={s.avatar}>
                        <img src={avatar} alt={`${name} ${surName}`} />
                    </div>
                    <div className={s.info}>
                        <div className={s.name-surName}>
                            <span>{name}</span> <span>{surName}</span>
                        </div>
                        <div className={s.text}>{status}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};