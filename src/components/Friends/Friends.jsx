import s from "./styles.module.css";
import {useEffect, useState} from "react";
import {getFriends} from "../../api/friends/requests.js";
import {NavLink, useSearchParams} from "react-router";
import {routes} from "../../routes/routes.js";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [params] = useSearchParams();

    const name = params.get("name");


    useEffect(() => {
        setIsLoading(true);
        getFriends().then((value) => {
            setFriends(value);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={s.container}>
            {friends.filter((friend) => {
                if (!name) return true;
                return friend.name.toLowerCase().includes(name.toLowerCase());
            }).map(({id, name, surName, status, avatar}) => (
                <NavLink className={s.Itemcontainer} to={routes.friendById.replace(':id', id)}>

                    <div className={s.avatar}>
                        <img src={avatar} alt={`${name} ${surName}`}/>
                    </div>
                    <div className={s.info}>
                        <div className={s.name - surName}>
                            <span>{name}</span> <span>{surName}</span>
                        </div>
                        <div className={s.text}>{status}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Friends;