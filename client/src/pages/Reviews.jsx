import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { TextField, Button, Box } from '@mui/material';
import { QUERY_ALL_REVIEWS } from '../utils/queries'; // Update the path as necessary

function Reviews() {
  const { loading, error, data } = useQuery(QUERY_ALL_REVIEWS);
  const [searchInput, setSearchInput] = useState('');
  const [filteredReviews, setFilteredReviews] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const filtered = data.reviews.filter((review) => {
      return (
        review.username.toLowerCase().includes(searchInput.toLowerCase()) ||
        review.reviewText.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilteredReviews(filtered);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ backgroundColor: '#1f1f1f', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'white', fontSize: '2.6rem', marginBottom: '20px' }}>Reviews</h1>
      <TextField
        label="Search by User or Review Content"
        variant="outlined"
        value={searchInput}
        onChange={handleSearchInputChange}
        style={{ marginBottom: '20px', width: '100%', maxWidth: '400px' }}
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'white' } }}
      />
      <Button variant="contained" onClick={handleSearch} style={{ marginBottom: '20px', backgroundColor: '#eb7e95', color: 'white' }}>
        Search
      </Button>
      <Box sx={{ color: 'white' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <li key={review._id} style={{ marginBottom: '20px' }}>
                <p>Username: {review.username}</p>
                <p>Review: {review.reviewText}</p>
                <p>Created At: {review.createdAt}</p>
              </li>
            ))
          ) : (
            data.reviews.map((review) => (
              <li key={review._id} style={{ marginBottom: '20px' }}>
                <p>Username: {review.username}</p>
                <p>Review: {review.reviewText}</p>
                <p>Created At: {review.createdAt}</p>
              </li>
            ))
          )}
        </ul>
      </Box>
    </div>
  );
}

export default Reviews;
