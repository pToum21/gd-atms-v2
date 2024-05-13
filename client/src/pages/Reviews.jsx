import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TextField, Box, Card, CardContent, CircularProgress, Fade, Toolbar } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { QUERY_ALL_REVIEWS } from '../utils/queries';
import '../styles/review.css';

const drawerWidth = 240;

function Reviews() {
  const { loading, error, data } = useQuery(QUERY_ALL_REVIEWS);
  const [searchInput, setSearchInput] = useState('');
  const [open, setOpen] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  if (loading) return <CircularProgress style={{ margin: 'auto' }} />;
  if (error) return <p>Error: {error.message}</p>;

  const filteredReviews = data && data.reviews ? data.reviews.filter((review) => {
    return (
      review.username.toLowerCase().includes(searchInput.toLowerCase()) ||
      review.reviewText.toLowerCase().includes(searchInput.toLowerCase())
    );
  }) : [];

  return (
    <Fade in={componentLoaded}>
      <Box sx={{ display: 'flex' }}>
        <div style={{ width: drawerWidth, height: '100vh', backgroundColor: '#f0f0f0', borderRight: '1px solid #ccc' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
            <button onClick={handleDrawerClose}>Close</button>
          </div>
          <div>
            {/* Sidebar content goes here */}
            <ul>
              <li>Inbox</li>
              <li>Starred</li>
              <li>Send email</li>
              <li>Drafts</li>
              <li>All mail</li>
              <li>Trash</li>
              <li>Spam</li>
            </ul>
          </div>
        </div>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <TextField
            label="Search by User or Review"
            variant="outlined"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="reviews-search"
          />
          <TransitionGroup className="reviews-transition-group">
            {filteredReviews.map((review) => (
              <CSSTransition key={review._id} timeout={300} classNames="scale">
                <Card className="review-card">
                  <CardContent>
                    <p className="review-username"><strong>Username:</strong> {review.username}</p>
                    <p className="review-text"><strong>Review:</strong> {review.reviewText}</p>
                    <p className="review-date"><strong>Created At:</strong> {review.createdAt}</p>
                  </CardContent>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {filteredReviews.length === 0 && (
            <Box className="no-matching-reviews">
              <p>No matching reviews found.</p>
            </Box>
          )}
        </Box>
      </Box>
    </Fade>
  );
}

export default Reviews;
