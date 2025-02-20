export const getNews = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Yuriy Klemeshov',
                    text: 'Я дотер',
                    likesCounter: 5
                },
                {
                    id: 2,
                    name: 'Dmitriy Klemeshov',
                    text: 'А я гей',
                    likesCounter: 9999
                },
                {
                    id: 3,
                    name: 'Ivan Ivanov',
                    text: 'Зачем я сюда зашел',
                    likesCounter: -1
                },
            ])
        }, 2000)
    })
}