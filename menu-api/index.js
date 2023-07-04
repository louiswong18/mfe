const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const menuItems = [
  {
    Id: 'ReactApp',
    Name: 'React App',
    Url: 'https://reactjs.org',
    Children: [
      {
        Id: 'ReactChild1',
        Name: 'React Child 1',
        Url: 'https://reactjs.org/docs/getting-started.html',
        Children: null,
      },
      {
        Id: 'ReactChild2',
        Name: 'React Child 2',
        Url: 'https://reactjs.org/tutorial/tutorial.html',
        Children: null,
      },
    ],
  },
];

// Add this route for the root path
app.get('/', (req, res) => {
  res.send('Menu API server is running.');
});

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});