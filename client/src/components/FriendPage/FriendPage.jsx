import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getFriendById } from '../../api/friends/requests.js';

export const FriendPage = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (Number(id)) {
      setIsLoading(true);
      getFriendById(Number(id)).then((value) => {
        setFriend(value);
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!friend) return <div>user not found</div>;

  return (
    <div>
      <div>{friend.id}</div>
      <div>{friend.name}</div>
      <div>{friend.surName}</div>
      <div>{friend.status}</div>
    </div>
  );
};
