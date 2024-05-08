import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { TextField, Button, Box, Card, CardContent } from '@mui/material';
import { QUERY_ALL_REVIEWS } from '../utils/queries'; // Update the path as necessary

function Reviews() {
  const { loading, error, data } = useQuery(QUERY_ALL_REVIEWS);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredReviews = data.reviews.filter((review) => {
    return (
      review.username.toLowerCase().includes(searchInput.toLowerCase()) ||
      review.reviewText.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ backgroundColor: '#f3f3f3', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Reviews</h1>
        <TextField
          label="Search by User or Review Content"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchInputChange}
          style={{ marginBottom: '20px', width: '100%' }}
        />
        <Box>
          {filteredReviews.map((review) => (
            <Card key={review._id} style={{ marginBottom: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <p><strong>Username:</strong> {review.username}</p>
                <p><strong>Review:</strong> {review.reviewText}</p>
                <p><strong>Created At:</strong> {review.createdAt}</p>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default Reviews;
