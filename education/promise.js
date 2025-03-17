const getPromise = () =>
  new Promise((resolve, reject) => {
    console.log('запуск timeout');
    setTimeout(() => {
      resolve({
        payload: {
          id: 123,
          name: 'qweqwe'
        },
        status: 200,
        message: 'success'
      });
    }, 2000);
    console.log('timeout запущен');
  });

// const a = getPromise();

// a.then((arg) => {
//     console.log(arg)
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('остановим крутилку');
// });

console.log('запустить крутилку');

const getFriends = async () => {
  try {
    const id = await getPromise()
      .then((data) => data.payload)
      .then((data) => data.id);
    // then
    return id;
  } catch (e) {
    // catch
    console.error('ошибку обработали');
    throw e;
  }
  // finally
  console.log('остановим крутилку');
};

const showFriend = async () => {
  try {
    const friends = await getFriends();
    console.log(friends);
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async () => {
  return getPromise().then((data) => data.payload);
};
