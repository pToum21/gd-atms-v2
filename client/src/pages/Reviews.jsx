import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TextField, Box, Card, CardContent, CircularProgress, Fade, Pagination } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { QUERY_ALL_REVIEWS } from '../utils/queries';
import Sidebar from '../components/Sidebar';
import '../styles/review.css';

function Reviews() {
  const { loading, error, data } = useQuery(QUERY_ALL_REVIEWS);
  const [searchInput, setSearchInput] = useState('');
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const reviewsPerPage = 8;

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) return <CircularProgress className="loading-spinner" />;
  if (error) return <p>Error: {error.message}</p>;

  const reviews = data?.reviews || [];
  const filteredReviews = reviews
    .filter((review) => (
      review.username?.toLowerCase().includes(searchInput.toLowerCase()) ||
      review.reviewText?.toLowerCase().includes(searchInput.toLowerCase())
    ))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <Fade in={componentLoaded}>
      <div className="reviews-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="reviews-content">
          <h1 className="reviews-title">Support Hub</h1>
          <TextField
            label="Search by Username or Ticket Content"
            variant="outlined"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="reviews-search"
          />
          <TransitionGroup className="reviews-transition-group">
            {currentReviews.map((review) => (
              <CSSTransition key={review._id} timeout={300} classNames="fade">
                <Card className="review-card">
                  <CardContent>
                    <div className="ticket-header">
                      <div className="profile-icon"></div>
                      <p className="review-username">{review.username}</p>
                    </div>
                    <p className="review-text">{review.reviewText}</p>
                    <div className="ticket-footer">
                      <p className="review-date">{formatDate(review.createdAt)}</p>
                      <p className="review-status">{review.status}</p>
                    </div>
                  </CardContent>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {currentReviews.length === 0 && (
            <Box className="no-matching-reviews">
              <p>No matching reviews found.</p>
            </Box>
          )}
          <Pagination
            count={Math.ceil(filteredReviews.length / reviewsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            className="reviews-pagination"
          />
        </div>
      </div>
    </Fade>
  );
}

export default Reviews;
