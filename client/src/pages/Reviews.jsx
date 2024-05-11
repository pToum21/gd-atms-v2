import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TextField, Box, Card, CardContent, CircularProgress, Fade, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { QUERY_ALL_REVIEWS } from '../utils/queries'; // Import QUERY_ALL_REVIEWS
import '../styles/review.css';

function Reviews() {
  const { loading, error, data } = useQuery(QUERY_ALL_REVIEWS);
  const [searchInput, setSearchInput] = useState('');
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(true); // Set initial state to true

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  if (loading) return <CircularProgress style={{ margin: 'auto' }} />;
  if (error) return <p>Error: {error.message}</p>;

  // Check if data exists before accessing its properties
  const filteredReviews = data && data.reviews ? data.reviews.filter((review) => {
    return (
      review.username.toLowerCase().includes(searchInput.toLowerCase()) ||
      review.reviewText.toLowerCase().includes(searchInput.toLowerCase())
    );
  }) : [];

  return (
    <Fade in={componentLoaded}>
      <div className="reviews-container">
        <Drawer
          open={openSidebar}
          onClose={toggleSidebar}
          variant="persistent" // Keep the sidebar open
        >
          <List>
            <ListItem button>
              <ListItemText primary="My Tickets" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Create Ticket" />
            </ListItem>
          </List>
        </Drawer>
        <div className="reviews-content">
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
        </div>
      </div>
    </Fade>
  );
}

export default Reviews;
