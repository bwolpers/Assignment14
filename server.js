const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the default port or 3000
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("hello world");
});

const bookData = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Fiction',
      publicationYear: 2020,
      description: 'Description of Book 1',
      reviews: [
        'Review 1',
        'Review 2',
        'Review 3'
      ],
      imageLink: 'link-to-book-cover-1.jpg',
    },

  ];

app.get('/api/data', (req, res) => {
  res.json(bookData); 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
