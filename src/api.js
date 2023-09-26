const apiUrl = 'https://api.example.com/books';

export const getBooks = async (query) => {
  const response = await fetch(`${apiUrl}?q=${query}`);
  return response.json();
};

export const submitReview = async (reviewData) => {
  const response = await fetch(`${apiUrl}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
  });
  return response.json();
};