const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors(
  {
    origin: 'http://localhost:5173'
  }
))

app.get('/posts', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Yuriy Klemeshov',
      text: 'Я дотер',
      likesCounter: 5
    },
    {
      id: 2,
      name: 'Zxc Monstr',
      text: 'А я гей',
      likesCounter: 9999
    },
    {
      id: 3,
      name: 'Ivan Ivanov',
      text: 'Зачем я сюда зашел',
      likesCounter: -1
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})